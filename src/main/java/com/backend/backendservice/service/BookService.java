package com.backend.backendservice.service;

import com.backend.backendservice.dto.BookDTO;

import java.util.List;
import java.util.Optional;

public interface BookService {

    public List<BookDTO> getAllBooks();
    public Optional<BookDTO> getBookById(Long id);
    public List<BookDTO> getBooksByAuthorName(String authorName);
    public String deleteBook(Long id);
    public Optional<BookDTO> updateBook(BookDTO bookDTO);
    public BookDTO createBook(BookDTO bookDTO);

}
