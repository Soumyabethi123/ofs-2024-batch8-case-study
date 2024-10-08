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

import com.ofss.main.domain.Login;
import com.ofss.main.service.LoginService;

@CrossOrigin("*")
@RequestMapping("loginapi")
@RestController
@Component
public class LoginController {

	@Autowired
	public LoginService loginService;
	
	// http://localhost:8080/loginapi/login
	@GetMapping("login/{username}")
	public Login getLoginfromDB(@PathVariable String username) {
		
		return loginService.getLoginByUsername(username);
	}
	
	@GetMapping("allLogin")
	public List<Login> getAllLoginfromDB() {
		
		return loginService.getAllLogin();
	}

}
