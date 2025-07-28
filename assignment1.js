// 1. Check Even or Odd
// Definition: Determine if a number is even or odd.
// Input: 7
// Output: Odd

// const n = 8
// console.log(n%2)

// if(n%2)
// {
//     console.log("odd number")
// }
// else
// {
//     console.log("enven number")
// }


// 2. Find the Maximum of Two Numbers
// Definition: Given two numbers, print the larger one.
// Input: 5 9
// Output: 9

// const a = 5;
// const b = 9;
// if (a > b)
//  {
//   console.log(a);
// } else
//  {
//   console.log(b);
// }

// 3. Check Leap Year
// Definition: Check if a given year is a leap year.
// Input: 2020
// Output: Leap Year

// const year = 2021;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }



// 4. Sum of Natural Numbers
// Definition: Calculate the sum of the first n natural numbers.
// Input: 5
// Output: 15

// const n = 5;

// const sum = (n * (n + 1)) / 2;

// console.log("Sum of first", n, "natural numbers is:", sum);


// 5. Factorial of a Number

// def factorial(n):
//     if n == 0 or n == 1:
//         return 1
//     return n * factorial(n - 1)

// print(factorial(4))  

// 6. Print Multiplication Table

// def multiplication_table(n):
//     for i in range(1, 11):
//         print(f"{n} x {i} = {n * i}")

// multiplication_table(3)  
// 7. Reverse a Number

// def reverse_number(n):
//     return int(str(n)[::-1])

// print(reverse_number(1234))  
// 8. Palindrome Check (Number)

// def is_palindrome(n):
//     return str(n) == str(n)[::-1]

// print(is_palindrome(121)) 

// 9. Check Prime Number

// def is_prime(n):
//     if n <= 1:
//         return False
//     for i in range(2, int(n**0.5) + 1):
//         if n % i == 0:
//             return False
//     return True

// print(is_prime(11))  

// 10. Count Digits in a Number

// def count_digits(n):
//     return len(str(n))

// print(count_digits(5023))  

// 11. Sum of Digits

// def sum_of_digits(n):
//     return sum(int(digit) for digit in str(n))

// print(sum_of_digits(123)) 

// 12. Check Armstrong Number

// def is_armstrong(n):
//     digits = str(n)
//     power = len(digits)
//     return n == sum(int(digit) ** power for digit in digits)

// print(is_armstrong(153))  

// 13. Generate Fibonacci Series
// def fibonacci(n):
//     fib = [0, 1]
//     while len(fib) < n:
//         fib.append(fib[-1] + fib[-2])
//     return fib

// print(fibonacci(5))  

// 14. Check Vowel or Consonant
// def check_vowel(char):
//     return char.lower() in 'aeiou'

// print(check_vowel('a'))  

// 15. Simple Calculator

// def calculator(a, b, operation):
//     if operation == '+':
//         return a + b
//     elif operation == '-':
//         return a - b
//     elif operation == '*':
//         return a * b
//     elif operation == '/':
//         return a / b if b != 0 else 'Cannot divide by zero'

// print(calculator(4, 2, '+'))  

// 16. Find GCD (HCF)

// import math

// def find_gcd(a, b):
//     return math.gcd(a, b)

// print(find_gcd(20, 28))  

// 17. Check Perfect Number

// def is_perfect(n):
//     divisors = [i for i in range(1, n) if n % i == 0]
//     return sum(divisors) == n

// print(is_perfect(28))  # Output: True (Perfect)

// 18. Print All Divisors

// def print_divisors(n):
//     divisors = [i for i in range(1, n + 1) if n % i == 0]
//     print(*divisors)

// print_divisors(10)  

// 19. Number is Positive, Negative or Zero

// def check_sign(n):
//     if n > 0:
//         return "Positive"
//     elif n < 0:
//         return "Negative"
//     else:
//         return "Zero"

// print(check_sign(-5))  

// 20. Find Power (Exponentiation)

// def power(a, b):
//     return a ** b

// print(power(2, 3))  
