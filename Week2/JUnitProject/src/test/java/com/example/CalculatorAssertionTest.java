package com.example;

import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorAssertionTest {

    Calculator calculator = new Calculator();

    @Test
    public void testAddition() {
        assertEquals(10, calculator.add(5,5));
    }

    @Test
    public void testSubtraction() {
        assertEquals(2, calculator.subtract(5,3));
    }
}