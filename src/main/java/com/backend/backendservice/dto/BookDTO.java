package com.backend.backendservice.dto;

import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {
    private Long id;
    private String name;
    private String authorName;
    private Float price;
    private Integer noOfPages;

}
