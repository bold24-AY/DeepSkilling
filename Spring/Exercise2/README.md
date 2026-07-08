# Exercise 2: Implementing Dependency Injection

## Scenario
Manage the dependencies between the `BookService` and `BookRepository` classes using Spring's IoC and Dependency Injection (setter injection).

## Steps
1. Update `applicationContext.xml` to wire `BookRepository` bean into `BookService` using the `<property>` tag.
2. Ensure `BookService` has the setter method `setBookRepository(BookRepository)`.
3. Test using `LibraryManagementApplication` to verify dependency injection.
