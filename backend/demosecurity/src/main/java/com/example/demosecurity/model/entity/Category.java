package com.example.demosecurity.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;
@Setter
@Getter
@Entity(name = "category")
@EntityListeners(AuditingEntityListener.class)
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdCategory")
    private long id;
    @OneToMany
    @JoinColumn(name = "IdCategory")
    private Set<Product> product;
    private String name;
    private boolean status;
    @CreatedDate
    private String createdate;
    @CreatedBy
    private String createby;

    public Category(long id, String name, boolean status, String createdate, String createby) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.createdate = createdate;
        this.createby = createby;
    }
    public Category(){

    }
}
