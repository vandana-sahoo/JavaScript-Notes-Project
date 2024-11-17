//spread and rest operator ...

//array
const names = ["vanna","anna","akku","tannu","saddha"];
const copynames = [...names];

console.log(names);
console.log(copynames);

copynames.pop()
console.log(names);
console.log(copynames);

//object

const obj = {
name : "vandana",
surname : "sahu",
age : "23",
address :"ashok nagar",
}
const newobj = {
    ...obj
};

console.log(obj);
console.log(newobj);

newobj.name = "vanna";
console.log(newobj);


delete newobj.name;
console.log(newobj);
 

//  newobj.name = "anna";
// console.log(newobj);  //by this name added in last in obj because in js it string so there is sequence wise/order of insertion added unorderd way 
// for numeric it be like 1,2,3 ...

//so if we want to add in first then we can do using destructuring.

//its not change the original array.
const dobj = {name:"anna" , ...newobj};
console.log(dobj);


//rest

function abcd (a,b,...rest){
console.log(a,b,rest);
}
abcd(1,2,3,4,56,44); //these values are going as array in the rest.

//we can write another name also
function abcd (a,b,...numbers){
    console.log(a,b,numbers);
    }
    abcd(1,2,55,6,66);