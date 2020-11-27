package com.example.demosecurity.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;


import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "product")
@EntityListeners(AuditingEntityListener.class)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdProduct")
    private long id;
    @ManyToOne
    @JoinColumn(name = "IdCategory")
    private Category category;

    @Column(length = 100)
    private String nameproduct;
    private float price;
    private int status;
    @Column(length = 255)
    private String image;
    @Column(length = 255)
    private String decription;
    private int purchase;
    @CreatedDate
    private Date createdate;
    @Column(length = 50)
    @CreatedBy
    private String createby;

    @OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name = "IdProduct")
    Set<ProductDetail> productDetail;

    @ManyToMany
    @JoinTable(
            // ten bang lien ket
            name = "supplierproduct",
            joinColumns = {@JoinColumn(name = "IdProduct", referencedColumnName = "IdProduct")},
            inverseJoinColumns = {@JoinColumn(name = "IdSupplier", referencedColumnName = "IdSupplier")}
    )
    Set<Supplier> suppliers;

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", category=" + category +
                ", nameproduct='" + nameproduct + '\'' +
                ", price=" + price +
                ", status=" + status +
                ", image='" + image + '\'' +
                ", decription='" + decription + '\'' +
                ", purchase=" + purchase +
                ", createdate=" + createdate +
                ", createby='" + createby + '\'' +
                ", productDetail=" + productDetail +
                ", suppliers=" + suppliers +
                '}';
    }
}
