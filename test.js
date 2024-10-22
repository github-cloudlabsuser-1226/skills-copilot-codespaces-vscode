// Define the Calculator class
class Calculator {
    // Method for addition
    add(a, b) {
        return a + b;
    }

    // Method for subtraction
    subtract(a, b) {
        return a - b;
    }

    // Method for multiplication
    multiply(a, b) {
        return a * b;
    }

    // Method for division
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Create an instance of the Calculator class
const calculator = new Calculator();

// Demonstrate the usage of the calculator
console.log("Addition: 5 + 3 =", calculator.add(5, 3));
console.log("Subtraction: 5 - 3 =", calculator.subtract(5, 3));
console.log("Multiplication: 5 * 3 =", calculator.multiply(5, 3));
console.log("Division: 6 / 3 =", calculator.divide(6, 3));