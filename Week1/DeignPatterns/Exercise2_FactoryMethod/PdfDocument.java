package DeignPatterns.Exercise2_FactoryMethod;

class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening PDF Document");
    }
}
