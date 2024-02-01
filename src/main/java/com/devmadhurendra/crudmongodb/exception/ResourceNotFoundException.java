package com.devmadhurendra.crudmongodb.exception;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String resourceName, String resourceValue) {
        super(resourceName + " not found with id " + resourceValue);
    }
}
