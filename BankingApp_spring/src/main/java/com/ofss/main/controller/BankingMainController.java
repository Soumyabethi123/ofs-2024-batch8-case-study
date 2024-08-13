package com.ofss.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Customer;
import com.ofss.main.service.CustomerService;

@CrossOrigin("*")
@RequestMapping("bankingcrudapi")
@RestController
public class BankingMainController {

	@Autowired
	public CustomerService customerservice;
	
	// http://localhost:8080/employeecrudapi/employees/1
	@GetMapping("customer/{username}")
	public Customer getCustomerFromDB(@PathVariable String username) {
			
		return customerservice
	}
}
