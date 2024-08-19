package com.ofss.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Customer;
import com.ofss.main.service.CustomerService;

@CrossOrigin("*")
@RequestMapping("bankingcrudapi")
@RestController
@Component
public class BankingMainController {

	@Autowired
	public CustomerService customerservice;
	
	// http://localhost:8080/bankingcrudapi/customer
	@GetMapping("customer/{username}")
	public Customer getCustomerFromDB(@PathVariable String username) {
			
		return customerservice.getCustomerByUsername(username);
	}
	
	@GetMapping("customerById/{customerId}")
	public Customer getCustomerByIdFromDB(@PathVariable int customerId) {
			
		return customerservice.getCustomerById(customerId);
	}
	
	@PostMapping("customer")
	public Customer addNewCustomer(@RequestBody Customer customer) {
		
		return customerservice.addNewCustomer(customer);
	}
	
	
	@GetMapping("customers")
	public List<Customer> getAllCustomersFromDB() {
			
		return customerservice.getAllCustomers();
	}
	
}
