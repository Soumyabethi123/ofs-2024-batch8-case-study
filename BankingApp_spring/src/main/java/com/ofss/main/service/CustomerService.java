package com.ofss.main.service;

import com.ofss.main.domain.Customer;

public interface CustomerService {

	Customer getCustomerByUsername(String Username);
	
	Customer addNewCustomer(Customer customer);
}
