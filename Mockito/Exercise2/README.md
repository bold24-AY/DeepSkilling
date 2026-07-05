# Exercise 2: Verifying Interactions

## Scenario
Verify that a method on a dependency mock object is called correctly by the service under test.

## Steps
1. Create a mock object for `ExternalApi`.
2. Call the method under test.
3. Verify that `getData()` was invoked on the mock object.
