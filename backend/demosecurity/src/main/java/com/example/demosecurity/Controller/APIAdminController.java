package com.example.demosecurity.Controller;

import com.example.demosecurity.Repository.UsersRepository;
import com.example.demosecurity.model.entity.Users;
import com.example.demosecurity.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/secure/auth/")
@CrossOrigin(origins = "*")
public class APIAdminController {
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    /*@PreAuthorize("hasAnyRole('ADMIN')")*/
    @PostMapping("/admin/add")
    public String addUserByAdmin(@RequestBody Users user) {
        String pwd = user.getPassword();
        String encryptPwd = bCryptPasswordEncoder.encode(pwd);
        user.setPassword(encryptPwd);
        usersRepository.save(user);
        return "user added successfully...";
    }

    @GetMapping("/admin/all")
    public String securedHello() {
        return "Secured Hello";
    }
}
