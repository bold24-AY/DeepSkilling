# Exercise 1: Implementing the Singleton Pattern

## Scenario
Ensure that a logging utility class in your application has only one instance throughout the application lifecycle to ensure consistent logging.

## Implementation Details
- `Logger.java`: Thread-safe singleton implementation using double-checked locking.
- `SingletonTest.java`: Verifies that multiple calls to `Logger.getInstance()` return the same instance.
