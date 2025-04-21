const marvalHeros=["Thor","Ironman","Spiderman"]
const dcHeros=["Superman","flash","batman"]

marvalHeros.push(dcHeros)// it return 3 elements and add another as array
console.log(marvalHeros[3]);// return all array element which we add

const newArry=marvalHeros.concat(dcHeros)
console.log(newArry[4]);// 

const allNewHeros=[...marvalHeros,...dcHeros] // spread oprtator good to ude in array 
console.log(allNewHeros[3]);
// store inner array value as normal array

const arr1=[1,2,3,[4,5],6,7,[3,4,[9,90]]]
const newArr1=arr1.flat(Infinity)
console.log(newArr1);
console.log(newArr1[2]);
console.log(newArr1[8]);
console.log(newArr1[10]);

