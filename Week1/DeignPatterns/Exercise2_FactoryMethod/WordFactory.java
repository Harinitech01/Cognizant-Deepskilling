package DeignPatterns.Exercise2_FactoryMethod;

class WordFactory extends DocumentFactory {
    Document createDocument() {
        return new WordDocument();
    }
}