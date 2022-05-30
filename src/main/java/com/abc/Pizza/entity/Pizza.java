package com.abc.Pizza.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pizza 
{    
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
    private Integer pizzaId;
    private String pizzaName;
    private Double pizzaAmount;
	public Integer getPizzaId() {
		return pizzaId;
	}
	public void setPizzaId(Integer pizzaId) {
		this.pizzaId = pizzaId;
	}
	public String getPizzaName() {
		return pizzaName;
	}
	public void setPizzaName(String pizzaName) {
		this.pizzaName = pizzaName;
	}
	public Double getPizzaAmount() {
		return pizzaAmount;
	}
	public void setPizzaAmount(Double pizzaAmount) {
		this.pizzaAmount = pizzaAmount;
	}
	@Override
	public String toString() {
		return "Pizza [pizzaId=" + pizzaId + ", pizzaName=" + pizzaName + ", pizzaAmount=" + pizzaAmount + "]";
	}
    
    
}
