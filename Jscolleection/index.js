const myMap= new Map();

myMap.set("Name", "varun")
myMap.set("Role", "developer")
myMap.set("Course", "java")


myMap.forEach((element ,key)=>{
    console.log(key + " : " + element);
})


const Myset = new Set();


Myset.add("varun")
Myset.add("developer")
Myset.add("java")


Myset.forEach((element)=>{
    console.log(element);
})