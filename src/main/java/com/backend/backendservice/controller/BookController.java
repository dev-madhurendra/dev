package com.backend.backendservice.controller;

import com.backend.backendservice.dto.BookDTO;
import com.backend.backendservice.service.BookService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<BookDTO> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/book")
    public Optional<BookDTO> getBookById(@RequestParam Long id) {
        return bookService.getBookById(id);
    }


    @PostMapping
    public BookDTO addBook(@RequestBody BookDTO bookDTO) {
        return bookService.createBook(bookDTO);
    }

    @PutMapping
    public Optional<BookDTO> updateBook(@RequestBody BookDTO bookDTO) {
        return bookService.updateBook(bookDTO);
    }

    @DeleteMapping
    public String deleteBook(@RequestParam Long id) {
        return bookService.deleteBook(id);
    }

    @GetMapping("/byAuthorName")
    public List<BookDTO> getByAuthorName(@RequestParam String authorName) {
        return bookService.getBooksByAuthorName(authorName);
    }


}
