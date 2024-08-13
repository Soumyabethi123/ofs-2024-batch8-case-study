package com.ofss.main.repository;

import org.springframework.data.repository.CrudRepository;

import com.ofss.main.domain.Login;

public interface loginRepository extends CrudRepository<Login, Integer>{

	Login findByusername(String Username);
}
