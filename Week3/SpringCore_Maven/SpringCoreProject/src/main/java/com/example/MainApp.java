package com.example;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        HelloWorld hello = context.getBean("helloBean", HelloWorld.class);

        hello.displayMessage();

        context.close();   // Close the Spring context
    }
}