package com.example.demosecurity.Convert;

import com.example.demosecurity.model.dto.ProductDetailDTO;
import com.example.demosecurity.model.entity.ProductDetail;
import org.springframework.stereotype.Component;

@Component
public class ProductDetailConvert {
    public ProductDetail toEntity(ProductDetailDTO dto) {
        ProductDetail entity = new ProductDetail();
        entity.setQuantity(dto.getQuantity());
        entity.setStatus(dto.getStatus());
        return entity;
    }

    public ProductDetailDTO toDTO(ProductDetail entity) {
        ProductDetailDTO dto = new ProductDetailDTO();
        dto.setId(entity.getId());
        dto.setIdproduct(entity.getProduct().getId());
        dto.setIdcolor(entity.getColor().getId());
        dto.setIdsize(entity.getSize().getId());
        dto.setStatus(entity.getStatus());
        dto.setCreatedate(entity.getCreatedate());
        dto.setCreateby(entity.getCreateby());
        return dto;
    }

    public ProductDetail toEntity(ProductDetailDTO dto, ProductDetail entity) {
        entity.setQuantity(dto.getQuantity());
        entity.setStatus(dto.getStatus());
        return entity;
    }
}
