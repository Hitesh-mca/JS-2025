/******** Falsy Value **********
false, 0, -0, BigInt0n (datatype), "", null, undefine,NaN */

/*.     Truthy Value.  
"0",'false'(declare as a string), " ",[],{},function(){}
*/

const userEmail="Hitesh123@gmail.com"

//it assumeed true 
if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
   
}

//if value like empty it assumed false
const userEmail1="";
if(userEmail1){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
    
}
const obj={}
if(Object.keys(obj).length==0){
    console.log("Object is emplty");
    
}