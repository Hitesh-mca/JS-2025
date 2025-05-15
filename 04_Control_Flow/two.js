// for of
const arr=[1,3,5,6,9]
for (const element of arr) {
    console.log(element); 
}

const greetings="Hello World"
for (const greet of greetings) {
    console.log(`Each character ${greet}`);
}
//Maps
const map1=new Map()
map1.set('IN',"India")
map1.set('AU',"Australia")
map1.set('SL',"Sri Lanka")
map1.set('USA',"United States of America")

//console.log(map1);

//apply loop on map
for (const key of map1) { 
    console.log(key);//will display key and value togather
    
}
for (const [key,value] of map1) { 
    console.log(key , "=> " , value);//will display key and value separate
    
}

