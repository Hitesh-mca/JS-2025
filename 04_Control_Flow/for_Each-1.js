const coding=["Java","Python","Js",'C++']

//forEach not return any value
const listOfIteams= coding.forEach ( function (iteam) { 
    console.log(iteam)
})
console.log(listOfIteams); // Display as a undefined

//How to store and return using arrow with () 
const myNumber=[1,2,3,4,5,6]
const retunValue= myNumber.filter((num)=> (num>3)
 )
console.log(retunValue);

//How to store and return using arrow with {} require return key word
 const myNumber1=[1,2,3,4,5,6]
const retunValue1= myNumber.filter((num)=> {
    return num > 3 
})
console.log(retunValue1); 

//another way to apply filter without using filter method

const myNumber3=[1,2,3,4,5,6,7,8,9]
const tempArray=[]//declare empty array
myNumber3.forEach((num)=>{
    if(num>3){
        tempArray.push(num)
    }
})
console.log(tempArray);
