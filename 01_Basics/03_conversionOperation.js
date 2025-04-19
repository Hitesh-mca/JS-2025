let score=45
let age="33"

console.log(typeof score);
console.log(typeof age);

let valueInNumber=Number(age)
console.log(typeof valueInNumber)

/* ''33" =>33
    ''33abc" = > NaN
    true =>1
    false =>0
*/

let isLoggedIn=" "
let booleIsLoggedIn=Boolean(isLoggedIn)
console.log(booleIsLoggedIn);

// 1=>true
// 0=>false
//"hitesh"=> true
//""=>false

let salary=4500
console.log(typeof salary);

let stringNumber=String(salary)
console.log(stringNumber, typeof stringNumber);


// ********************************* Operation **********

console.log(2 + 2);
console.log("1" + 2)
console.log(1 + "2");
console.log("1"+ 2 + 2);
console.log(2 + 2 + "1");

const id=Symbol('123')
const anotherID=Symbol('123')
console.log(id);
console.log(anotherID)
console.log("Check both id same = > ", id === anotherID)
