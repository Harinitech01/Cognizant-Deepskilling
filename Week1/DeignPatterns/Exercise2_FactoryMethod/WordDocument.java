package DeignPatterns.Exercise2_FactoryMethod;

class WordDocument implements Document {
    public void open() {
        System.out.println("Opening Word Document");
    }
}