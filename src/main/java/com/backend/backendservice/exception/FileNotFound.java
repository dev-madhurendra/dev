package com.backend.backendservice.exception;

public class FileNotFound extends RuntimeException{
    public FileNotFound(String message) {
        super(message);
    }
}
