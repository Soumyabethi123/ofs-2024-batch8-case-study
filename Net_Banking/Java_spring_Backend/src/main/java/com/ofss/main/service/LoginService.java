package com.ofss.main.service;

import java.util.List;

import com.ofss.main.domain.Login;

public interface LoginService {

	public Login getLoginByUsername(String Username);
	
	List<Login> getAllLogin();
}
