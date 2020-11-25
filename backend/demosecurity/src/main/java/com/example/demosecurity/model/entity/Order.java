package com.example.demosecurity.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Entity(name = "orders")
@EntityListeners(AuditingEntityListener.class)
public class Order {
    @Id
    @Column(name="IdOrder")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    @ManyToOne
    @JoinColumn(name = "IdUser")
    private Users users;

    @ManyToOne
    @JoinColumn(name = "IdCustomer")
    private Customer customer;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "IdProductDetail")
    Set<OrderProductDetail> orderProductDetail;

    @Column(length = 15)
    private String phone;
    private String address;
    @CreatedDate
    private Date createdate;
    @Column(length = 50)
    @CreatedBy
    private String createby;
    private int status;
}
