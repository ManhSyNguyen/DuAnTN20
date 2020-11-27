package com.example.demosecurity.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetailDTO {
    private long id;
    private Long idproduct;
    private Long idcolor;
    private Long idsize;
    private int quantity;
    private int status;
    private Date createdate;
    private String createby;
}
