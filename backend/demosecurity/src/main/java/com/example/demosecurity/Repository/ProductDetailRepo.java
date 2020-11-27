package com.example.demosecurity.Repository;

import com.example.demosecurity.model.entity.Category;
import com.example.demosecurity.model.entity.ProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductDetailRepo extends JpaRepository<ProductDetail,Long> {
    @Query("SELECT c FROM productdetail c WHERE c.id = :id ")
    ProductDetail findProductDetailById(@Param("id") Long id);
}
