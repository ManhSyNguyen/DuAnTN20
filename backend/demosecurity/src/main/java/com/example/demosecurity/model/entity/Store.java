package com.example.demosecurity.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Setter
@Getter
@Entity(name = "store")
@EntityListeners(AuditingEntityListener.class)
public class Store implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdStore")
    private long id;

    @ManyToOne
    @JoinColumn(name = "IdUser")
    private Users users;

    @Column (length=50)
    private String namestore;
    @ManyToMany
    @JoinTable(
            // ten bang lien ket
            name = "store_productdetail",
            joinColumns = {@JoinColumn(name = "IdStore", referencedColumnName = "IdStore")},
            inverseJoinColumns = {@JoinColumn(name = "IdProductDetail", referencedColumnName = "IdProductDetail")}
    )
    Set<ProductDetail> productdetail;
}
