# Exercise 2: Implementing the Factory Method Pattern

## Scenario
Create different types of documents (Word, PDF, Excel) using the Factory Method Pattern.

## Implementation Details
- `Document.java`: Common interface for documents.
- `WordDocument.java`, `PdfDocument.java`, `ExcelDocument.java`: Concrete document implementations.
- `DocumentFactory.java`: Creator abstract class.
- `WordDocumentFactory.java`, `PdfDocumentFactory.java`, `ExcelDocumentFactory.java`: Concrete creator implementations.
- `FactoryMethodTest.java`: Verification test class.
