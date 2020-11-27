package com.example.demosecurity.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
@Entity(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTransaction")
    private long id;

    @ManyToOne
    @JoinColumn(name = "idOrder")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "IdCustomer")
    private Customer customer;

    private Date gio;

    @Column (length=20)
    private String cardNumber;
    @Column (length=50)
    @CreatedDate
    private Date createdate;

    @CreatedBy
    private String createby;
}