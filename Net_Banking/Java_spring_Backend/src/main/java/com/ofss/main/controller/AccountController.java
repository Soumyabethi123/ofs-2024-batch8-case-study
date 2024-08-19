package com.ofss.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.service.AccountService;

@CrossOrigin("*")
@RequestMapping("accountapi")
@RestController
@Component
public class AccountController {

	@Autowired
	AccountService accountService;
	
	// http://localhost:8080/accountapi/account
	@PostMapping("account")
	public Account addNewAccount(@RequestBody Account account) {
		
		return accountService.addnewAccount(account);
	}
}
