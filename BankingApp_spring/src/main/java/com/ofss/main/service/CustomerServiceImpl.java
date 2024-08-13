package com.ofss.main.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.Customer;
import com.ofss.main.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	public CustomerRepository customerRepository;
	
	@Override
	public Customer getCustomerByUsername(String Username) {
		
		return customerRepository.findByLogin_username(Username);
	
	}

	@Override
	public Customer addNewCustomer(Customer customer) {
		
		return customerRepository.save(customer);
	}

	
}
