package com.example;

public class CustomerService {

    private CustomerRepository repository;

    public void setRepository(CustomerRepository repository) {
        this.repository = repository;
    }

    public void displayCustomer() {
        System.out.println("Customer Name: " + repository.getCustomer());
    }
}