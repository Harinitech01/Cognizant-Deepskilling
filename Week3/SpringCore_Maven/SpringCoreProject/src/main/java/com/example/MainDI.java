package com.example;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainDI {

    public static void main(String[] args) {

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        CustomerService service =
                context.getBean("customerService", CustomerService.class);

        service.displayCustomer();

        context.close();
    }
}