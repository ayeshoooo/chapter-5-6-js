
//chapter 6 



//ex 6.1

// Step 1: Create a function that takes two parameters, adds them together, and returns the result
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // Step 2: Set up two different variables with two different values
  let variable1 = 5;
  let variable2 = 8;
  
  // Step 3: Use your function on the two variables and output the result using console.log
  let result1 = addNumbers(variable1, variable2);
  console.log(`Result 1: ${result1}`); // Output: Result 1: 13
  
  // Step 4: Create a second call to the function using two more numbers as arguments
  let result2 = addNumbers(10, 20);
  console.log(`Result 2: ${result2}`); // Output: Result 2: 30


  //ex 6.2

// Step 1: Create an array of descriptive words
const descriptiveWords = ["happy", "energetic", "creative", "friendly", "adventurous", "thoughtful", "charming", "clever"];

// Step 2: Create a function that contains a prompt asking the user for a name
function describeName() {
  // Prompt the user for a name
  const userName = prompt("Enter a name:");

  // Step 3: Select a random value from the array using Math.random
  const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
  const randomWord = descriptiveWords[randomIndex];

  // Step 4: Output into the console the prompt value and the randomly selected array value
  console.log(`${userName} is ${randomWord}.`);
}

// Step 5: Invoke the function
describeName();



//ex 6.3


// Step 1: Set up two variables containing number values
let number1 = 10;
let number2 = 5;

// Step 2: Set up a variable to hold an operator, either + or -
let operator = '+';

// Step 3: Create a function that retrieves the two values and the operator string value within its parameters
function calculate(num1, num2, operation = 'add') {
  // Use a condition to check if the operator is + or - and perform the corresponding operation
  if (operation === 'add') {
    return num1 + num2;
  } else if (operation === 'subtract') {
    return num1 - num2;
  } else {
    // Default to addition if not presented with a valid operator
    return num1 + num2;
  }
}

// Step 4: Within console.log(), call the function using your variables and output the response to the console
console.log(`Result with operator ${operator}: ${calculate(number1, number2, operator)}`);

// Step 5: Update the operator value to be the other operator type and call the function again with the new updated arguments
operator = '-';
console.log(`Result with operator ${operator}: ${calculate(number1, number2, operator)}`);

//ex 6.4


// Step 1: Set up an empty array to store the values that will be calculated within the loop
let resultsArray = [];

// Step 2: Create a loop that runs 10 times, incrementing by 1 each time, creating two values each iteration
for (let i = 1; i <= 10; i++) {
  // For the first value, multiply the value of the loop count by 5
  let value1 = i * 5;
  
  // For the second value, multiply the value of the loop counter by itself
  let value2 = i * i;

  // Step 3: Create a function that returns the added value of the two parameters passed into the function
  function calculateSum(num1, num2) {
    return num1 + num2;
  }

  // Step 4: Within the loop, call the calculation function, passing in the two values as arguments
  // Step 5: Still within the loop, push the result values into the array as it iterates through the loop
  let result = calculateSum(value1, value2);
  resultsArray.push(result);
}

// Step 6: After the loop is complete, output the value of the array into the console
console.log(resultsArray);

// Step 7: The output should be [0, 6, 14, 24, 36, 50, 66, 84, 104, 126]


//ex 6.5


// Step 1: Create a variable value with let and assign a string value of 1000 to it
let value = "1000";

// Step 2: Create an IIFE function and within this function scope assign a new value to a variable of the same name
(function() {
  let value = "IIFE Local Value";
  // Within the function, print the local value to the console
  console.log("Inside IIFE:", value);
})();

// Step 3: Create an IIFE expression, assigning it to a new result variable
let result = (function() {
  // Assign a new value to a variable of the same name within this scope
  let value = "IIFE Expression Local Value";
  // Return this local value to the result variable
  return value;
})(); // Invoke the function immediately

// Print the result variable, along with the variable name you've been using
console.log("Result from IIFE Expression:", result);

// Step 4: Create an anonymous function that has a parameter
let anonymousFunction = function(param) {
  // Add logic that will assign a passed-in value to the same variable name
  value = param;
  // Print it as part of a string sentence
  console.log("Inside Anonymous Function:", value);
};

// Invoke the function and pass in your desired value within the rounded brackets
anonymousFunction("New Value");

// After the invocation, print the updated value outside the function
console.log("Outside Anonymous Function:", value);

//ex 6.6


// Step 1 and Step 2: Create a recursive function to calculate the factorial
function calculateFactorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  }
  
  // Step 3: Invoke the function, providing an argument of whatever number you want to find the factorial of
  const numberToCalculate = 5;
  console.log(`Factorial of ${numberToCalculate}: ${calculateFactorial(numberToCalculate)}`);
  
  // Step 4: Change and update the number to see how it affects the results
  const updatedNumber = 7;
  console.log(`Factorial of ${updatedNumber}: ${calculateFactorial(updatedNumber)}`);


  //ex 6.7



  // Step 1: Set the start variable at a value of 10
let start = 10;

// Step 2 to Step 9: Create a recursive countdown function
function countdown(value) {
  // Step 3: Output the current value of the countdown into the console
  console.log(value);

  // Step 4: Add a condition to check if the value is less than 1; if it is, then return the function
  if (value < 1) {
    return;
  }

  // Step 5 and Step 6: Check if the value is not less than 1, then continue to loop by calling the function within itself
  countdown(value - 1);
}

// Step 7 to Step 9: Create a second countdown using a condition
function countdownWithCondition(value) {
  // Check if the value is greater than 0
  if (value > 0) {
    // Decrease the value of the countdown by 1
    value--;

    // Use return to return the function, which then invokes it again and again until the condition is no longer true
    return countdownWithCondition(value);
  }
}

// Invoke the countdown functions
console.log("Countdown using recursion:");
countdown(start);

console.log("\nCountdown with condition using recursion:");
countdownWithCondition(start);


//ex 6.8

// Step 1: Set a variable name and assign a function expression to it
let myFunctionExpression = function(parameter) {
    console.log("Function Expression:", parameter);
  };
  
  // Step 2: Pass an argument into the function expression
  myFunctionExpression("Hello, Function Expression!");
  
  // Step 3: Create the same function as a normal function declaration
  function myFunctionDeclaration(parameter) {
    console.log("Function Declaration:", parameter);
  }
  
  // Pass an argument into the function declaration
  myFunctionDeclaration("Hello, Function Declaration!");