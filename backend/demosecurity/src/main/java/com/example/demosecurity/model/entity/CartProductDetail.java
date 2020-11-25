package com.example.demosecurity.model.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity(name = "cartproductdetail")
public class CartProductDetail {
    @EmbeddedId
    private CartProductDetailId id;
    private int quantity;
    private float price;
    private int status ;

}
