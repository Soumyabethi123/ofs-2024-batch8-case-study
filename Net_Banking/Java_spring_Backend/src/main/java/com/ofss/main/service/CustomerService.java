package com.ofss.main.service;

import java.util.List;

import com.ofss.main.domain.Customer;

public interface CustomerService {

	Customer getCustomerByUsername(String Username);
	
	Customer addNewCustomer(Customer customer);
	
	Customer getCustomerById(int customerId);
	
	List<Customer> getAllCustomers();
}
