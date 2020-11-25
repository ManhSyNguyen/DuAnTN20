package com.example.demosecurity.model.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import java.io.Serializable;

@Entity(name = "orderproductdetail")
public class OrderProductDetail implements Serializable {
    @EmbeddedId
    private OrderProductDetailId id;
    private int quantity;
    private float price;
    private int status ;
}
