const myArray=[1,2,3,4,5,6]
const myHero=new Array('Vihan','Sonal','Arya')
console.log(myArray[5]);

//Aaary Mathods

myArray.push(7)
myArray.push(8)
myArray.push(9)
console.log(myArray);

myArray.pop()
console.log(myArray)
myArray.unshift(10) // Add avlue at first position
console.log(myArray);
myArray.shift()//
console.log(myArray);// Remove first value from array
console.log(myArray.includes(6));
console.log(myArray.indexOf(4));
console.log("===============================")
const newMyarray=myArray.join
console.log(myArray);
console.log(typeof(newMyarray));

console.log("******************* Slice*******")
const arr1=[5,6,7,8,9,10,11]
const arr1Slice=arr1.slice(2,5)
console.log(`original arr1 = >  ${arr1}`);
console.log(`After slice = ${arr1Slice}` )
console.log("******************* Splice*******")
const arr2=[5,6,7,8,9,10,11]
const arr2Splice=arr2.splice(2,5)
console.log(`original arr2 = >  ${arr2}`);// 
console.log(`After splice = ${arr2Splice}` )
