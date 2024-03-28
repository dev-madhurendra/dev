# Import necessary LangChain components
from langchain.vectorstores.cassandra import Cassandra  # Cassandra database connector
# Wrapper for vector store index-> # It will wrap all those particular vectors in one specific package so that it can be used quickly
from langchain.indexes.vectorstore import VectorStoreIndexWrapper
from langchain.text_splitter import RecursiveCharacterTextSplitter  # Text splitter for chunking text
from langchain_openai import OpenAI, OpenAIEmbeddings  # OpenAI language model and embeddings

import os
from dotenv import load_dotenv, find_dotenv  # Load environment variables from .env file

# Initialize CassIO, the engine powering the Astra DB integration in LangChain
import cassio

from PyPDF2 import PdfReader  # Library for reading PDF files

# Load environment variables from .env file if present
load_dotenv(find_dotenv())

# Get necessary environment variables
# This two variables is basically used to connect Astra DB which is hosted on the cloud
ASTRA_DB_APPLICATION_TOKEN = os.environ.get("ASTRA_DB_APPLICATION_TOKEN")  # Astra DB application token
ASTRA_DB_ID = os.environ.get("ASTRA_DB_ID")  # Astra DB ID

# This one is used for using the open AI api features
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")  # OpenAI API key

# Read PDF file
pdfReader = PdfReader('./sample_data/Attention_is_all_you_need.pdf')
# Till here we have moved in uploading file
print(pdfReader)


# Now we are going to read the text
# Initialize a variable to store raw text extracted from the PDF
raw_text = ''

# Iterate over pages of the PDF and extract text
for i, page in enumerate(pdfReader.pages):
    # Extract text from the particular page
    content = page.extract_text()
    if content:
        raw_text += content


# Now we are going to split the text into chunks
# Initialize RecursiveCharacterTextSplitter for chunking text
text_splitter = RecursiveCharacterTextSplitter(
    separators=['\n\n', '\n', '.', ' '],  # Separators for text splitting
    chunk_size=800,  # Size of each text chunk
    chunk_overlap=200  # Overlap between consecutive chunks
)

# Split raw text into chunks using text splitter
chunks = text_splitter.split_text(raw_text)


# Initialize CassIO with Astra DB application token and database ID
# This will initialize the connection to your database
# Cassio is used as a library to initialize database
cassio.init(token=ASTRA_DB_APPLICATION_TOKEN, database_id=ASTRA_DB_ID)

# Initialize OpenAI language model and embeddings
llm = OpenAI(openai_api_key=OPENAI_API_KEY)
embedding = OpenAIEmbeddings()

# Here we are going to create our vector databases
# Initialize Cassandra vector store with embeddings, table name, session, and keyspace
astra_vector_store = Cassandra(
    embedding=embedding,
    table_name="pdf_astra_test",
    session=None,  # Cassandra session (set to None as CassIO manages it)
    keyspace="default_keyspace"  # Cassandra keyspace name
)

# Now we are going to sotre all the chunks into database in vector format
# Add text chunks to the Cassandra vector store
astra_vector_store.add_texts(chunks)

# Print the number of inserted text chunks
print("Inserted %i headlines." % len(chunks[:50]))

# Create a vector store index wrapper for the Cassandra vector store
astra_vector_index = VectorStoreIndexWrapper(vectorstore=astra_vector_store)

# Initialize a variable to track whether it's the first question
first_question = True

# Main loop to interactively ask questions and retrieve answers
while True:
    if first_question:
        query_text = input("\n Enter your question (or type 'quit' to exit): ").strip()
    else:
        query_text = input("\n What's your next question (or type 'quit' to exit): ").strip()

    if query_text.lower() == "quit":
        break

    if query_text == "":
        continue

    first_question = False

    print("\n QUESTION: \"%s\"" % query_text)

    # Query the vector store index with the question and the OpenAI language model
    answer = astra_vector_index.query(question=query_text, llm=llm).strip()
    print("\n ANSWER: \"%s\"" % answer)

    # Print the first document by relevance
    print("FIRST DOCUMENT BY RELEVANCE:")
    for doc, score in astra_vector_store.similarity_search_with_score(query_text, k=4):
        print("    [%0.4f] \"%s ...\"" % (score, doc.page_content[:84]))
