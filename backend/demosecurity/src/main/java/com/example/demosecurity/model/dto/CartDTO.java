package com.example.demosecurity.model.dto;

import com.example.demosecurity.model.entity.CartProductDetail;
import com.example.demosecurity.model.entity.Customer;
import com.example.demosecurity.model.entity.ProductDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;


import java.util.Date;
import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CartDTO {
    private long id;
    private long idcustomer;
    private String phone;
    private String address;
    @CreatedDate
    private Date createdate;
    @CreatedBy
    private String createby;
    private int status;
    private Set<ProductDetailDTO> ProductDetails;
}
