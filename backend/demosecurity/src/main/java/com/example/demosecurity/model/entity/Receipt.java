package com.example.demosecurity.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Setter
@Getter
@Entity(name = "receipt")
@EntityListeners(AuditingEntityListener.class)
public class Receipt implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdReceipt")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "IdUser")
    private Users users;
    private int realquantity;
    private int quantityeimport;
    private float price;
    private int status;
    @CreatedDate
    private Date createdate;
    @Column(length = 50)
    @CreatedBy
    private String createby;

    @ManyToMany
    @JoinTable(
            // ten bang lien ket
            name = "receipt_productdetail",
            joinColumns = {@JoinColumn(name = "IdReceipt", referencedColumnName = "IdReceipt")},
            inverseJoinColumns = {@JoinColumn(name = "IdProductDetail", referencedColumnName = "IdProductDetail")}
    )
    Set<ProductDetail> productdetail;

}
