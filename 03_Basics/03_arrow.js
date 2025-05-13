const user=function(){
    let userName="Hitesh";
    console.log(this.userName);
    
}
user();

const user1=()=>{
    let userName="Sonal";
    console.log(this);
    
}
user1()

const add=(n1,n2)=>{
    return n1+n2
}
console.log(add(3,5));

const add1=(n1,n2)=>n1+n2
console.log(add1(5,6));

// return object in arrow function

const obj=()=>({userV:"Vihan"}) // for object rap {} in ()
console.log(obj());
