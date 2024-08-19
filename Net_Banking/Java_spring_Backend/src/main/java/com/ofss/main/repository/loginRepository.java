package com.ofss.main.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ofss.main.domain.Login;

@Repository
public interface loginRepository extends CrudRepository<Login, Integer>{

	Login findByusername(String Username);

}
