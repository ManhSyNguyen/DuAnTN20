package com.example.demosecurity.Controller;

import com.example.demosecurity.Service.auth.CategoryService;
import com.example.demosecurity.Service.auth.ColorService;
import com.example.demosecurity.model.dto.CategoryDTO;
import com.example.demosecurity.model.dto.ColorDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/api")
public class SizeColorService {
    @Autowired
    private ColorService colorService;

    @GetMapping("/sizes")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public List<ColorDTO> getAll() {
        return colorService.findAll();
    }

    @PostMapping("/size")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public ColorDTO createCategory(@RequestBody ColorDTO colorDTO) {
        return colorService.save(colorDTO);
    }

    @PutMapping(value = "/size/{id}")
    public ColorDTO updateNew(@RequestBody ColorDTO colorDTO, @PathVariable("id") long id) {
        colorDTO.setId(id);
        return colorService.update(colorDTO);
    }

    @DeleteMapping(value = "/size/{id}")
    public void deleteNew(@PathVariable("id") Long id) {
        colorService.delete(id);
    }
}
