package com.ofss.main.service;

import java.util.List;
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

	@Override
	public Customer getCustomerById(int customerId) {
		
		//return customerRepository.findById(customerId);
		
		Optional<Customer> customerOptional = customerRepository.findById(customerId);
		
		if(customerOptional.isPresent()) {
			
			return customerOptional.get();
		}
		return null;
	}

	@Override
	public List<Customer> getAllCustomers() {
		
		List<Customer> customers = (List<Customer>)customerRepository.findAll();
		return customers;
	}

	
}
