package com.backend.pairprogramming.exception;

import com.backend.pairprogramming.payload.ApiResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse> handleResourceNotFoundException(
            ResourceNotFoundException ex
    ) {
        log.warn(String.format(">>> {}", ex.getMessage()));
        return new ResponseEntity<>(new ApiResponse(ex.getMessage(), HttpStatus.NOT_FOUND.toString()), HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<ApiResponse> handleNoResourceFoundException(NoResourceFoundException ex) {
        return new ResponseEntity<>(new ApiResponse(ex.getMessage(), HttpStatus.BAD_REQUEST.toString()),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ApiResponse> handleIllegalArgumentException(IllegalArgumentException ex) {
        return new ResponseEntity<>(new ApiResponse(ex.getMessage(), HttpStatus.BAD_REQUEST.toString()),HttpStatus.BAD_REQUEST);
    }
}
