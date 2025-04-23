const tinderUser=new Object() // singltone object
const tinderUser1={} // different way to declare object non-singleton object
console.log(tinderUser)// display empty object
console.log(tinderUser1);//
tinderUser.id="123abc"
tinderUser.name="Vihan"
tinderUser.isLoggedIn=false
console.log(tinderUser)// display empty object

const regularUser={
    email : "vihan123@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Hitesh",
            lastName:"Patel"

        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);// get first name 

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
//const obj3={obj1,obj2} // not a good practice it will add two object in obj 3
//console.log("object 3 data = " , obj3);
//************************** */
const mergObje=Object.assign(obj1,obj2)// will add obje 2 into obj1 
console.log("Object 1 Data = ",obj1);
console.log("Merg object Data = ",mergObje);

//******************************** */
const obj5={1:"a", 2:"b"}
const obj6={3:"a", 4:"b"}
const mergObje1=Object.assign({},obj5,obj6)// will not chnge  obje 1 
console.log("Object 5 Data = ",obj5);
console.log("Merg object Data = ",mergObje1);

const obje6={...obj1,...obj2}// west way to use spread operator
console.log(obje6);

//**************. Way to get key and values ************* */
console.log(Object.keys(tinderUser));// give property as a key
console.log(Object.values(tinderUser));// give value
console.log(Object.entries(tinderUser));//give both property and value in array form


console.log(tinderUser.hasOwnProperty('id'));
