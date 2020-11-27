package com.example.demosecurity.Controller;

import com.example.demosecurity.Service.auth.ProductDetailService;
import com.example.demosecurity.model.dto.CategoryDTO;
import com.example.demosecurity.model.dto.ProductDetailDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/api")
public class ProductDetailController {
    @Autowired
    private ProductDetailService productDetailService;
    @GetMapping("/productdetails")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public List<ProductDetailDTO> getAll() {
        return productDetailService.findAll();
    }

    @PostMapping("/productdetail")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public ProductDetailDTO createCategory(@RequestBody ProductDetailDTO productDetailDTO) {
        return productDetailService.save(productDetailDTO);
    }

    @PutMapping(value = "/productdetail/{id}")
    public ProductDetailDTO updateNew(@RequestBody ProductDetailDTO productDetailDTO, @PathVariable("id") long id) {
        productDetailDTO.setId(id);
        return productDetailService.update(productDetailDTO);
    }

    @DeleteMapping(value = "/productdetail/{id}")
    public void deleteNew(@PathVariable("id") Long id) {
        productDetailService.delete(id);
    }
}
