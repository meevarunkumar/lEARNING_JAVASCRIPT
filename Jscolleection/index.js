// const myMap= new Map();

// myMap.set("Name", "varun")
// myMap.set("Role", "developer")
// myMap.set("Course", "java")


// myMap.forEach((element ,key)=>{
//     console.log(key + " : " + element);
// })


// const Myset = new Set();


// Myset.add("varun")
// Myset.add("developer")
// Myset.add("java")


// Myset.forEach((element)=>{
//     console.log(element);
// })


let a ="aaabbbbcccc";


let map = new Map();


for(let i=0; i<a.length;i++){
    if(!map.has(a[i])){
        map.set(a[i], 1)
    }
    else {
        map.set(a[i], map.get(a[i])+1)
    }
}
console.log(map);