package com.example.demosecurity.model.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@Setter
@Entity(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class Users {
    @Id
    @Column(name = "IdUser")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column (length=50)
    private String username;
    @Column (length=100)
    private String password;
    @Column (length=50)
    private String email;
    @CreatedDate
    private Date createdate;
    @CreatedBy
    private String createby;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "IdUser"), inverseJoinColumns = @JoinColumn(name = "IdRole"))
    private Set<Role> roles;



}
