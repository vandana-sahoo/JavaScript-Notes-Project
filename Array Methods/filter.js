// the filter method creates a new array with all elements that passes the test implemeted by the provide func.

// like Map() it doesn't chnage the original array, insted ,it return a new array with only the element that meet the condition.

//  example
const number =[1,2,3,4,50];
const evenNumbers = number.filter(num => num % 2 === 0);
console.log(evenNumbers);

const names = ['vanna','anna','shadda','tannu'];

let newarr = names.filter(function(value){
return value.startsWith('v');
})
console.log(newarr);
