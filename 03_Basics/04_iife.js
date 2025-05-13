// Immediately Invoked Fun ction Expressions (IIFE)

//1 
function connectDB(){
    console.log("Bdatbase Connect successfully");
    
}

//2
connectDB();
//iife call it use for because remove global variable pollution 
(function connectDB1(){
    console.log("Bdatbase Connect successfully in DB1");
})(); 

 //3  
 // //iife with arrow function also call Name iife
(()=>{
    console.log("Bdatbase Connect successfully in Arrow function");
})(); 

//4 simple iife (unname) bec
//iife with arrow function and parameter
((n1,n2)=>{
    console.log(`add of ${n1} and ${n2} = ${n1 + n2}`);
    
})(4,5);

// NOTE:- if we use more than one IIFE, we need to put; at the end of the previous IIFE 