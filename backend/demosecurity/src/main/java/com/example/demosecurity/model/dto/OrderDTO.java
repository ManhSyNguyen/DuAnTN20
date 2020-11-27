package com.example.demosecurity.model.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    private long Id;
    private long idUser;
    private long idcustomer;
    private String phone;
    private String address;
    private int status;
    private Date createdate;
    private String createby;
}
