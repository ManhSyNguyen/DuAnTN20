package com.example.demosecurity.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity(name = "cartproductdetail")
public class CartProductDetail {
    @EmbeddedId
    private CartProductDetailId id;

    @ManyToOne
    @MapsId("IdCart")
    @JoinColumn(name = "IdCart")
    @JsonIgnore
    private Cart cart;

    @ManyToOne
    @MapsId("IdProductDetail")
    @JoinColumn(name = "IdProductDetail")
    private ProductDetail productDetail;

    private int quantity;
    private float price;
    private int status ;

}
