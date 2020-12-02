package com.example.demosecurity.model.dto;


import com.example.demosecurity.model.entity.CartProductDetail;
import com.example.demosecurity.model.entity.OrderProductDetail;
import com.example.demosecurity.model.entity.ProductDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    private long Id;
    private long idUser;
    private long idcustomer;
    private String phone;
    private String address;
    private String paymentmethod;
    private int status;
    private Date createdate;
    private String createby;
    private Set<ProductDetailDTO> productDetailList ;
    private Set<OrderProductDetail> orderProductDetails ;
}
