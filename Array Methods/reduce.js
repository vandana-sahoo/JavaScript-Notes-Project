// the reduce () method  applies a function against an accumulator and each element in the array to reduce it to a single value .

// it takes a callback func with an accumulator and current value as arguments and return a single value.

// ex- summing all the element in an array

const number = [7,2];
const sum = number.reduce((accumulator,current) => accumulator + current,0);
console.log(sum);
