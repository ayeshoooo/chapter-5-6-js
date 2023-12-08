
//Ex 5.1


// Step 1: Set the max value for the number guessing game
const maxValue = 5;

// Step 2: Generate a random number for the solution
const solution = Math.floor(Math.random() * maxValue) + 1;
// Uncomment the line below for development to see the solution value
// console.log("Solution:", solution);

// Step 3: Variable to track whether the answer is correct or not
let isCorrect = false;

// Step 4: Use a while loop to ask the user to enter a number between 1 and 5
while (!isCorrect) {
  // Step 5: Prompt the user to enter a number and convert the response to a number
  const userGuess = parseInt(prompt(`Enter a number between 1 and ${maxValue}:`));

  // Check if the guess is equal to the solution
  if (userGuess === solution) {
    isCorrect = true;
    console.log("Congratulations! You guessed the correct number.");
  } else {
    // Provide feedback and continue the loop
    if (userGuess > solution) {
      console.log("Too high! Try again.");
    } else {
      console.log("Too low! Try again.");
    }
  }
}


//ex 5.2



// Step 1: Set the starting counter to 0
let counter = 0;

// Step 2: Create a variable, step, to increase the counter by
const step = 10;

// Step 3: Add a do-while loop
do {
  // Print the counter to the console
  console.log("Counter:", counter);

  // Increment the counter by the step amount each loop
  counter += step;

// Step 4: Continue to loop until the counter is equal to 100 or more than 100
} while (counter < 100);


//ex 5.3


// Step 1: Setup a blank array, myWork
let myWork = [];

// Step 2: Using a for loop, create a list of 10 objects
for (let i = 1; i <= 10; i++) {
  // Step 3: Use a ternary operator to set the status alternately
  const status = i % 2 === 0 ? true : false;

  // Step 4: Create a lesson using a temporary object variable
  const lesson = {
    name: `Lesson ${i}`,
    status: status
  };

  // Step 5: Push the objects to the myWork array
  myWork.push(lesson);
}

// Step 6: Output the array to the console
console.log(myWork);





//ex 5.4



// Step 1: Create an empty array, myTable, to hold the table data
let myTable = [];

// Step 2: Set variable values for the number of rows and columns
const numRows = 3;
const numColumns = 4;

// Step 3: Set up a counter variable with an initial value of 0
let counter = 0;

// Step 4: Create a for loop to construct each row of the table
for (let i = 0; i < numRows; i++) {
  // Step 5: Set up a new temporary array to hold each row of data
  let tempTable = [];

  // Step 6: Nest a second loop within the first to count the columns
  for (let j = 0; j < numColumns; j++) {
    // Step 7: Increment the main counter each iteration of the inner loop
    counter++;

    // Step 8: Push the counter values to the temporary array, tempTable
    tempTable.push(counter);
  }

  // Step 9: Push the temporary array to the main table, myTable
  myTable.push(tempTable);
}

// Step 10: Output into the console with console.table(myTable)
console.table(myTable);


//ex 5.5


// Step 1: Create a grid array variable
let grid = [];

// Step 2: Set a value of 64 for the number of cells
const totalCells = 64;

// Step 3: Set a counter to 0
let counter = 0;

// Step 4: Create a global variable to be used for the row array
let row = [];

// Step 5: Create a loop that will iterate up to the number of cells
for (let i = 0; i <= totalCells; i++) {
  // Step 6: Add an outer if statement using modulo to check if the counter is divisible by 8
  if (counter % 8 === 0) {
    // Step 7: Inside the preceding if statement, add another if statement to check if the row is undefined
    if (row !== undefined) {
      // Add the row to the main grid array
      grid.push(row);
    }

    // Clear the row array if the counter is divisible by 8
    row = [];
  }

  // Step 9: Increment the main counter by 1
  counter++;

  // Step 10: Set up a temporary variable to hold the value of the counter and push it to the row array
  let tempValue = counter;
  row.push(tempValue);

  // Step 11: Within the loop iteration, check if the value of the counter is equal to the total number of columns
  if (counter === 8) {
    // Add the current row to the grid
    grid.push(row);
  }
}

// Step 12: Output the grid into the console
console.log(grid);



//ex 5.6

// Step 1: Create an empty array
let myArray = [];

// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let x = 0; x < 10; x++) {
  myArray.push(x);
}

// Step 3: Log the array into the console
console.log("Array:", myArray);

// Step 4: Use the for loop to iterate through the array and output into the console
console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Step 5: Use the for of loop to output the value into the console from the array
console.log("Using for-of loop:");
for (const value of myArray) {
  console.log(value);
}


//ex 5.7

// Step 1: Create a simple object with three items
let myObject = {
    item1: "Apple",
    item2: "Banana",
    item3: "Orange"
  };
  
  // Step 2: Using the for in loop, get the properties' names and values from the object
  console.log("Looping over object:");
  for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
  }
  
  // Step 3: Create an array containing the same three items
  let myArray = ["Apple", "Banana", "Orange"];
  
  // Using the for loop to output the values from the array into the console
  console.log("\nLooping over array:");
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
  
  // Alternatively, using the for in loop to output the values from the array into the console
  console.log("\nLooping over array with for-in:");
  for (let index in myArray) {
    console.log(myArray[index]);
  }


  //ex 5.8

  // Step 1: Set up a string variable to use as output
let outputString = "";

// Step 2: Select a number to skip and set that number as a variable
const numberToSkip = 3;

// Step 3: Create a for loop that counts to 10
for (let i = 1; i <= 10; i++) {
  // Step 4: Add a condition to check if the value of the looped variable is equal to the number that should be skipped
  if (i === numberToSkip) {
    // Step 5: If the number is to be skipped in the condition, continue to the next number
    continue;
  }

  // Step 6: As you iterate through the values, append the new count value to the end of the main output variable
  outputString += i;
}

// Step 7: Output the main variable after the loop completes
console.log("Output with continue:", outputString);

// Step 8: Reuse the code, but change continue to break and see the difference
outputString = "";

for (let i = 1; i <= 10; i++) {
  // Change continue to break
  if (i === numberToSkip) {
    // Step 5: If the number is to be skipped in the condition, break out of the loop
    break;
  }

  // Step 6: As you iterate through the values, append the new count value to the end of the main output variable
  outputString += i;
}

// Step 7: Output the main variable after the loop completes
console.log("Output with break:", outputString);



