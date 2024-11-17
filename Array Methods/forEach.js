

// The `forEach()` method in JavaScript is used to execute a provided function once for each element in an array. It allows you to perform operations on each array element in turn.



// - **Purpose**: To perform an action on each element of an array.
// - **Output**: `forEach()` does not return a new array or any value; it simply executes the function on each element.
// - **Original Array**: Remains unchanged.




// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => console.log(number));
// // Output: 
// // 1
// // 2
// // 3
// // 4
// // 5


// 1. Original Array: `[1, 2, 3, 4, 5]`
// 2. Function**: `number => console.log(number)` (a function that logs each number to the console)
// 3. Process:- The function is called once for each element in the array, logging the element to the console.



// -What It Does+: Executes a provided function once for each element in an array.
// - Why Use It: It's useful for performing operations like logging, updating elements, or any side effects on each element of the array.
// ForEach alyways takes a function.
// foreach not a loop  thats why its not use continue and break.

// ex--
const names = ['vanna','anna','shadda','tannu'];

names.forEach(function(names) { 
  if (names === 'shadda'){ }
  else{console.log(names);}
    })

