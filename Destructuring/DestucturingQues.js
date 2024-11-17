//Grouping an array of object by specific property (grouping user by role)


const users =[
    {
        name:"vanna",age:23 , role:"admin"
    },

    {
        name:"tanna",age:13 , role:"admin"
    },
    {
        name:"anna",age:16 , role:"user"
    },
]

let obj ={}

users.forEach(function(user){
if(obj[user.role]){  //if user.role array are avilable inside obj then push user.
    obj[user.role].push(user); 
}else{
    //else first create an array user.role inside obj for store users.
    obj[user.role] = []; 
    obj[user.role].push(user);
}
});

console.log(obj);