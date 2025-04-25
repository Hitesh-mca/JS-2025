// When there is no fix of parameter and argument ...price is rest operator
function calulateCartPrice(...price){
    const lenth=price.length
    let total=0
    for( i=0;i<lenth;i++)
        total = total + price[i]

        

    return total 
}
const totalPrice=calulateCartPrice(23,45,67,89,26,67)
console.log(`Total ammount of your shopping is ${totalPrice}`);


//************ Pass object in fuction ********* */

const user ={
    userName : "hitesh",
    age : 23
}
function hanselObject(anyObjectName){
    console.log(`user name is ${anyObjectName.userName} and his/her age is ${anyObjectName.age}`);
    
}
hanselObject(user)