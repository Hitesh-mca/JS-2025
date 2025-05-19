const coding=["Java","Python","Js",'C++']
coding.forEach ( function (iteam) {
    console.log(iteam)
})

coding.forEach((i1)=>{
    console.log(i1);
    
})

function printMe(iteam){
    console.log(iteam);
    
}
coding.forEach(printMe)//pass function on for_Each as argument
coding.forEach((item,index, arr)=>{
    console.log(item,index,arr);
    
})

const myCoding=[
    {
        languageName : "Javascript",
        fileName:"java"
    },
    {
        languageName : "Html",
        fileName:"hello.html"
    },
    {
        languageName : ".Net",
        fileName:"LoginPage"
    },
]
myCoding.forEach((item)=>{
    //console.log(item);
    console.log(item.languageName)
    
})