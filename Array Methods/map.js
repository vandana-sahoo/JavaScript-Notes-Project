
// in simple word...
// the map() method cretae a new array by calling a provided fun an each element in the original array.
//  it doen't change the original array,instead it return a new array with the result of the fuc applied to each element .


// ### Definition
// The `map` function is a method available on arrays in JavaScript. It creates a new array populated with the results of calling a provided function on every element in the calling array.

// ### Syntax
// ```javascript
// array.map(callback(element, index, array), thisArg)


// - **callback**: A function that is called for every element of the array. It takes three arguments:
//   - **element**: The current element being processed in the array.
//   - **index** (optional): The index of the current element being processed.
//   - **array** (optional): The array `map` was called upon.
// - **thisArg** (optional): A value to use as `this` when executing the callback.



// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]
// ```
// In this example, the `map` function takes each element of the `numbers` array, multiplies it by 2, and returns a new array with the doubled values.

// ### Key Points to Mention
// - **Immutability**: `map` does not modify the original array. Instead, it creates a new array with the transformed values.
// - **Pure Function**: The callback function should ideally be a pure function, meaning it doesn't have side effects and returns the same output for the same input.
// - **Return Value**: `map` always returns a new array, even if the transformation doesn't change the elements.
// - **Usage**: `map` is commonly used for data transformation tasks, such as converting data formats or applying computations to each element in an array.

// ### Advanced Example
// To demonstrate a more complex usage, you can show how `map` can be used with objects:

// ```javascript
// const users = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jane', lastName: 'Doe' }
// ];

// const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
// console.log(fullNames); // Output: ['John Doe', 'Jane Doe']
// ```
// This example shows array of full names.

// ### Common Interview Questions
// 1. **How does `map` differ from `forEach`?**
//    - `map` creates a new array with the results, while `forEach` simply iterates over the array and does not return a new array.

// 2. **Can `map` be used on objects?**
//    - No, `map` is specifically a method for arrays. For objects, you might use `Object.keys` or `Object.entries` in combination with `map`.

// 3. **What happens if the callback function does not return a value?**
//    - If the callback function does not return a value, `map` will populate the new array with `undefined` for those elements.





//const arr =[1,2,3,4,5];
// function double(x){             //this is normal func
//   return x * 2;
// }
// const output= arr.map(double);

// const output = arr.map(function double(x){       //this is valid nd thats why called higher order fuc.
//   return x * 2 ;
// })
 
// const output = arr.map(x => x * 2);  //arrow func and this type of function which have no name called anoymons func.

// console.log(output);  //save and return new array instead an original array.

  

// example- transform into tripal

// const arr = [2,3,4,5,6];
// const tripal = arr.map(x => x * 3);    //save in tripal but not change an original array.
// console.log(tripal); 


// example for binary-

// const arr = [5,6,7,8,9];

// function binary(x){
//   return x.toString(2);
// }
// const output = arr.map(binary);

// const binary = arr.map(function binary(x){
//   return x.toString(2);
// });

// const binary = arr.map((x) => x.toString(2));
// console.log(output); 


// how to know when use map --note -- we use map when we want use previous array and want a new array they have to same size of array as previous.

// ex-
const names = [ 'vanna', 'tannu', 'shaddha','anna', 'akku'];

let newarr = names.map(function(values){
  return values + " ji";
});

console.log(newarr);
console.log(names);