package com.example.demosecurity.Repository;


import com.example.demosecurity.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductRepo extends JpaRepository<Product,Long> {
    @Query("SELECT c FROM product c WHERE c.id = :id ")
    Product findCategoryById(@Param("id") Long id);

}
