package com.backend.pairprogramming.exception;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String resourceName, String resourceValue) {
        super("Resource " + resourceName + " not found with id " + resourceValue);
    }
}
