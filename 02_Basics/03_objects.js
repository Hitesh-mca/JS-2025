//Object Literals

const mySym= Symbol("Key1"); //define symbol and use it in object it is constructor so pass one value

const userDetails={
    name:"Hitesh",
    age:35,
    email:"hitesh@gmail.com",
    isLoggedIn:false,
   // mySym : "Any Value" // we can use but it's datatype as string
    [mySym]:"Any Value", // way to define symbol in and it's datatype is symbol
    location: "Visnagar",
    lastLoginDay:["Monday","Friday"],
    "fullName":"Hiteshkumar Patel" //another way to use 

}
console.log(userDetails[3]); // undefine
console.log(userDetails.name);// way one to access objct value
console.log(userDetails["name"])// way two, it is good prctice for use it 
console.log(userDetails["fullName"])
console.log(userDetails[mySym]);
console.log(typeof mySym);

userDetails.email="hitesh123@gmail.com" // Change value of object

console.log(userDetails);
Object.freeze(userDetails)//lock the object to prevent changes to the value. 

userDetails.email="Hitesh45678@gmail.com" // after freez not change 
console.log(("*********** After Freez change email but not chnage value"));

console.log(userDetails);

