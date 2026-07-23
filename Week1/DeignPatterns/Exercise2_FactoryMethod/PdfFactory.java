package Exercise2_FactoryMethod;

class PdfFactory extends DocumentFactory {
    Document createDocument() {
        return new PdfDocument();
    }
}