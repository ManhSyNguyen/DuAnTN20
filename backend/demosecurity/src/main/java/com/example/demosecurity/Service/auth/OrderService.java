package com.example.demosecurity.Service.auth;

import com.example.demosecurity.Convert.OrderConvert;
import com.example.demosecurity.Repository.CustomerRepo;
import com.example.demosecurity.Repository.OrderRepo;
import com.example.demosecurity.Repository.UsersRepository;
import com.example.demosecurity.model.dto.OrderDTO;
import com.example.demosecurity.model.dto.ProductDetailDTO;
import com.example.demosecurity.model.entity.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
@Autowired
private OrderConvert orderConvert;
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private UsersRepository usersRepository;
@Autowired
private OrderRepo orderRepo;
    private static final Logger logger = LogManager.getLogger(ProductDetailService.class);

    public OrderDTO save(OrderDTO orderDTO) {
        Order neworder= new Order();
        Customer customer = customerRepo.findCustomersById(orderDTO.getIdcustomer());
        Users users = usersRepository.findUsersById(orderDTO.getIdUser());
        neworder = orderConvert.toEntity(orderDTO);
        neworder.setCustomer(customer);
        neworder.setUsers(users);
        orderRepo.save(neworder);
        return orderConvert.toDTO(neworder);

    }

    public OrderDTO update(OrderDTO orderDTO) {
        Order newOrder = new Order() ;
        Order oldOrder = orderRepo.findOrdersById(orderDTO.getId());
        newOrder = orderConvert.toEntity(orderDTO,oldOrder);
        Customer customer = customerRepo.findCustomersById(orderDTO.getIdcustomer());
        Users users = usersRepository.findUsersById(orderDTO.getIdUser());
        newOrder.setCustomer(customer);
        newOrder.setUsers(users);
        orderRepo.save(newOrder);
        return orderConvert.toDTO(newOrder);

    }

    public void delete(Long id) {
        try {
            Optional<Order> product = orderRepo.findById(id);
            if(product!=null){
                orderRepo.deleteById(id);
            }
        }catch (Exception e){
            logger.error(e.getMessage());
        }
    }


    public List<OrderDTO> findAll(Pageable pageable) {
        List<OrderDTO> results = new ArrayList<>();
        try {
            List<Order> entities = orderRepo.findAll(pageable).getContent();
            for (Order item: entities) {
                OrderDTO productDetailDTO = orderConvert.toDTO(item);
                results.add(productDetailDTO);
            }
            return results;
        }catch (Exception e) {
            logger.error(e.getMessage());
        }
        return results;
    }


    public int totalItem() {
        try {
            return (int) orderRepo.count();
        }catch (Exception e){
            logger.error(e.getMessage());
        }
        return 1;
    }

    public List<OrderDTO> findAll() {
        List<OrderDTO> results = new ArrayList<>();
        List<Order> entities = orderRepo.findAll();
        for (Order item: entities) {
            OrderDTO newDTO = orderConvert.toDTO(item);
            results.add(newDTO);
        }
        return results;
    }
}
