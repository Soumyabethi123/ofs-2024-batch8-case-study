package com.ofss.main.service;

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
		// TODO Auto-generated method stub
		
		
		return null;
	}

	
}
