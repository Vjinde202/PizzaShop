package com.abc.Pizza.entity.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.Pizza.entity.Pizza;
import com.abc.Pizza.entity.Repository.PizzaRepository;

@Service
public class PizzaService 
{
	@Autowired
   private PizzaRepository pizzaRepository;
	
	public Pizza registerPizza(Pizza pizza)
	{
		return pizzaRepository.save(pizza);
	}
	public List<Pizza> getPizzas()
	{
		return (List<Pizza>) pizzaRepository.findAll();
	}
	public void deletePizza(Integer id)
	{
	  pizzaRepository.deleteById(id);
	}
	
}
