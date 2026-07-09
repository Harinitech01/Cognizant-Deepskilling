package Alg_data.Exercise2_EcommerceSearch;

public class Main {
    public static void main(String[] args) {

        String[] products = {
                "Laptop",
                "Mobile",
                "Headphones",
                "Keyboard",
                "Mouse"
        };

        String searchItem = "Mobile";
        boolean found = false;

        for (int i = 0; i < products.length; i++) {
            if (products[i].equals(searchItem)) {
                found = true;
                break;
            }
        }

        if (found) {
            System.out.println(searchItem + " found in store");
        } else {
            System.out.println(searchItem + " not found");
        }
    }
}