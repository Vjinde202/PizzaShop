package com.abc.Pizza.entity.Web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.abc.Pizza.entity.Pizza;
import com.abc.Pizza.entity.Service.PizzaService;



@RestController
@CrossOrigin(allowedHeaders = "*", origins = {"http://localhost:8080","http://localhost:4200"})

public class PizzaRestController  
{
	@Autowired
	private PizzaService pizzaService;
	
	@PostMapping("/add")//localhost:8080/add
	public Pizza registerPizza(@RequestBody Pizza pizza)
	{  
		System.out.println("Inside Spring bott add operation"+pizza);
		return pizzaService.registerPizza(pizza);
	}
	@GetMapping("/getPizzas")//localhost:8080/admin/getPizzas
	public List<Pizza> getPizzas()
	{
		return pizzaService.getPizzas();
	}
	@DeleteMapping("/deletePizza")
	
	public void deletePizza(@RequestParam Integer id)//localhost:8080/deletePizza?id=value
	{
		pizzaService.deletePizza(id);
	}
}
