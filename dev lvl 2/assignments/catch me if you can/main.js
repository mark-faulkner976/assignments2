// function sum(num1, num2){
//     try{
//         if(typeof num1 != "number" || typeof num2 != "number"){
//             throw new Error("ruh roh raggy, those aren't numbers")
//         } 
//         return console.log(num1 + num2)
//     }
//     catch(err){
//         console.log(err)
//     } 
    
// }

// try{
//     sum("1", "2")
// }
// catch(err){
//     console.log(err)
// }

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  if (username !== "sam" || password !== "123abc"){
    throw new Error("try again")
  }
    console.log("login successful!")
}

try{
    login("sa", "123abc")
}
catch(err){
    console.log(err)
}