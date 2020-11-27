package com.example.demosecurity.Convert;

import com.example.demosecurity.model.dto.OrderDTO;
import com.example.demosecurity.model.dto.ProductDetailDTO;
import com.example.demosecurity.model.entity.Order;
import com.example.demosecurity.model.entity.ProductDetail;
import org.springframework.stereotype.Component;

@Component
public class OrderConvert {
    public Order toEntity(OrderDTO dto) {
        Order entity = new Order();
        entity.setPhone(dto.getPhone());
        entity.setAddress(dto.getAddress());
        entity.setStatus(dto.getStatus());
        return entity;
    }

    public OrderDTO toDTO(Order entity) {
        OrderDTO dto = new OrderDTO();
        dto.setId(entity.getId());
        dto.setIdUser(entity.getUsers().getId());
        dto.setIdcustomer(entity.getCustomer().getId());
        dto.setStatus(entity.getStatus());
        dto.setCreatedate(entity.getCreatedate());
        dto.setCreateby(entity.getCreateby());
        return dto;
    }

    public Order toEntity(OrderDTO dto, Order entity) {
        entity.setPhone(dto.getPhone());
        entity.setAddress(dto.getAddress());
        entity.setStatus(dto.getStatus());
        return entity;
    }
}
