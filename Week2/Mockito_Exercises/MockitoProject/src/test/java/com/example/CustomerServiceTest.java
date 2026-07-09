package com.example;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class CustomerServiceTest {

    @Test
    public void testMockingAndStubbing() {

        // Create Mock Object
        CustomerRepository mockRepository = mock(CustomerRepository.class);

        // Stubbing
        when(mockRepository.getCustomerName()).thenReturn("Hari");

        // Inject Mock
        CustomerService service = new CustomerService(mockRepository);

        // Assertion
        assertEquals("Hari", service.fetchCustomerName());
    }
}