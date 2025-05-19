const number=[1,2,3,4,5,6,7,8,9]

const newNumber = number.map((num)=> {return num+10})

console.log(newNumber);

// map chaining

const newNumber1=number
            .map((num)=> num*10)// result pass next line => 10
            .map((num)=> num +1 )// get result from preveousline and add +1 = >11
            .filter((num)=> num > 40)// apply filter 11>40 not return after 41 will return
console.log(newNumber1);
