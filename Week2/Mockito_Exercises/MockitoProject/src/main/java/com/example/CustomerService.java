package com.example;

public class CustomerService {

    private CustomerRepository repository;

    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public String fetchCustomerName() {
        return repository.getCustomerName();
    }
}