package com.ofss.main.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.Login;
import com.ofss.main.repository.loginRepository;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	loginRepository loginrepository;
	
	@Override
	public Login getLoginByUsername(String Username) {
		
		return loginrepository.findByusername(Username);
	
	}
}
