package com.backend.backendservice.service.serviceimpl;

import com.backend.backendservice.dto.BookDTO;
import com.backend.backendservice.entity.Book;
import com.backend.backendservice.exception.FileNotFound;
import com.backend.backendservice.repository.BookRepo;
import com.backend.backendservice.service.BookService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepo bookRepo;
    private final ModelMapper modelMapper;
    @Autowired
    public BookServiceImpl(BookRepo bookRepo, ModelMapper modelMapper) {
        this.bookRepo = bookRepo;
        this.modelMapper = modelMapper;
    }


    @Override
    public List<BookDTO> getAllBooks() {
        List<Book> books = bookRepo.findAll();
        return books
                .stream()
                .map(book -> modelMapper.map(book,BookDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public Optional<BookDTO> getBookById(Long id) {
        Optional<Book> book = bookRepo.findById(id);
        if ( book.isPresent() )
            return Optional.ofNullable(modelMapper.map(book, BookDTO.class));
        String exception = "File with file " + id + "not found ! ";
        throw new FileNotFound(exception);
    }

    @Override
    public List<BookDTO> getBooksByAuthorName(String authorName) {
        List<Book> books = bookRepo.findAll();
        List<Book> book = books
                            .stream()
                            .filter(book1 -> book1.getAuthorName().equalsIgnoreCase(authorName)).toList();
        return book.stream().map(book1 -> modelMapper.map(book1,BookDTO.class)).collect(Collectors.toList());
    }



    @Override
    public String deleteBook(Long id) {
        Optional<Book> book = bookRepo.findById(id);
        if (book.isPresent() ) {
            bookRepo.deleteById(id);
            return "Book with book " + id + " deleted !";
        }
        return "Book with book " + id + " not found !";
    }

    @Override
    public Optional<BookDTO> updateBook(BookDTO bookDTO) {
        Optional<Book> book = bookRepo.findById(bookDTO.getId());
        if ( book.isPresent() ) {
            Book newBook = book.get();
            newBook.setPrice(bookDTO.getPrice());

            return Optional.ofNullable(modelMapper.map(bookRepo.save(newBook), BookDTO.class));
        }
        throw new FileNotFound("Book with book " + bookDTO.getId() + " not found !");
    }

    @Override
    public BookDTO createBook(BookDTO bookDTO) {
        Book book = bookRepo.save(modelMapper.map(bookDTO,Book.class));
        return modelMapper.map(book,BookDTO.class);
    }
}
