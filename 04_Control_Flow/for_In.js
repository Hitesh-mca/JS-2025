const myObject={
    game1: 'NFS',
    game2: 'Mariao',
    game3: 'Spiderman'
}
for (const key in myObject) {
    console.log(`${key} = > ${myObject[key]}`);
    
}
const proLang=["Js","C++","PY","JAVA","CSS"]
for (const key in proLang) {
   console.log(proLang[key]);
   
}
//Maps not allow for in, it is not iterator
const map1=new Map()
map1.set('IN',"India")
map1.set('AU',"Australia")
map1.set('SL',"Sri Lanka")
map1.set('USA',"United States of America")
for (const key in map1) {
    console.log("ll");
    
}