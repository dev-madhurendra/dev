package com.devmadhurendra.crudmongodb.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class MyConfig {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
