package com.abc.Pizza.entity.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.abc.Pizza.entity.Pizza;

@Repository
public interface PizzaRepository extends CrudRepository<Pizza, Integer> {

}
