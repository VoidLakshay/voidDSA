# Complexity in Data Structures and Algorithms

## 1. What is Complexity?
Complexity is a way to measure the efficiency and performance of an algorithm. It tells us how much of the system's resources (like time and memory) an algorithm will consume as the size of the input data (`n`) increases. 

Comparing the complexity of different algorithms helps us choose the best one for a specific problem.

## 2. Time Complexity
**Time Complexity** is a measure of the total time an algorithm takes to execute as a function of the input size.

### Key Points about Time Complexity:
- **Not Actual Time:** It does not measure the actual time in seconds or milliseconds. Actual time varies based on processor speed, RAM, compiler, and other running applications.
- **Operations Count:** Instead, time complexity measures the **number of basic operations** (like assignments, comparisons, arithmetic operations) an algorithm performs.
- **Scalability:** It helps us understand how the execution time grows as the input size grows. If an algorithm takes $O(n^2)$ time, doubling the input size will increase the execution time by 4 times.

### Why do we need it?
In competitive programming or real-world applications, data can be huge (millions of records). If our time complexity is too high, the program will take too long to run, leading to a **TLE (Time Limit Exceeded)** error. By calculating time complexity beforehand, we can ensure our solution will execute within the allowed time limit.
