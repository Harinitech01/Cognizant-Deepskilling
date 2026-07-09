package com.example;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        Country country = context.getBean("country", Country.class);

        System.out.println(country);

        context.close();
    }
}