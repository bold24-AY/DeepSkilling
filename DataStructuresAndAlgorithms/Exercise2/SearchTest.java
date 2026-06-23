import java.util.Arrays;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product("P101", "Laptop", "Electronics"),
            new Product("P102", "Smartphone", "Electronics"),
            new Product("P103", "Coffee Maker", "Home"),
            new Product("P104", "Backpack", "Accessories"),
            new Product("P105", "Running Shoes", "Footwear")
        };

        Product resultLinear = SearchAlgorithms.linearSearch(products, "Coffee Maker");
        System.out.println("Linear Search Result: " + (resultLinear != null ? resultLinear.getProductName() : "Not Found"));

        Arrays.sort(products);

        Product resultBinary = SearchAlgorithms.binarySearch(products, "Coffee Maker");
        System.out.println("Binary Search Result: " + (resultBinary != null ? resultBinary.getProductName() : "Not Found"));
    }
}
