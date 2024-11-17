// Mapping over an array of user data to create a list of card.

const users = [
    {
        name: "vanna" ,age :23
    },
    {
        name: "allu" ,age :21
    },
    {
        name: "tannu" ,age :16
    }
];

let newarr = users.map(function(user){
    return `<div> <h3>${user.name}</h3></div>`;
})
console.log(newarr);
