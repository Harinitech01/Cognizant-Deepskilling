package com.example;

import org.junit.Test;

import static org.mockito.Mockito.*;

public class CustomerServiceVerifyTest {

    @Test
    public void testVerifyInteraction() {

        // Create Mock Object
        CustomerRepository mockRepository = mock(CustomerRepository.class);

        // Stubbing
        when(mockRepository.getCustomerName()).thenReturn("Hari");

        // Inject Mock
        CustomerService service = new CustomerService(mockRepository);

        // Call the method
        service.fetchCustomerName();

        // Verify interaction
        verify(mockRepository).getCustomerName();
    }
}