# Exercise 7: Financial Forecasting

## Understanding Recursive Algorithms
Recursion is a programming technique where a method calls itself to solve a smaller subproblem of the same problem. It simplifies code by breaking down complex nested or repetitive processes into a base case and a recursive step.

## Complexity Analysis
- **Time Complexity**: $O(N)$ where $N$ is the number of years. Each call performs a constant number of operations and decrements the years by 1.
- **Space Complexity**: $O(N)$ due to the call stack size from the recursive calls.

## Optimization Options
To avoid stack overflow or excessive memory usage for large values of $N$, the recursive solution can be optimized by:
1. **Iterative Approach**: Implementing a simple loop which takes $O(1)$ auxiliary space.
2. **Memoization / Dynamic Programming**: Storing previously calculated results if there are overlapping subproblems (not present in this simple linear growth calculation, but relevant for complex multi-variable growth models).
