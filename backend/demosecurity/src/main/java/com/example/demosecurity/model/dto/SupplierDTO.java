package com.example.demosecurity.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SupplierDTO {
    private long Id;
    private String NameSupplier;
    private String Titile;
    private String Address;
    private boolean status;
    private Date createdate;
    private String createby;
}
