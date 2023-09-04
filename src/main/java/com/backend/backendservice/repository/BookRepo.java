package com.backend.backendservice.repository;

import com.backend.backendservice.dto.BookDTO;
import com.backend.backendservice.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BookRepo extends JpaRepository<Book,Long> {

}
