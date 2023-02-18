//noraml object creation

const circle={
    radius:40,
    diameter:80
   
}
console.log(circle)
for(let key in circle){// iterating keys from objects
    console.log(key)
    console.log(circle[key])
}

console.log(Object.keys(circle))// it return all the key in array form
const arr = Object.keys(circle); //Stroing keys into array
for(let key of arr){ // iterating array
    console.log(key)
}
console.log(Object.entries(circle))// it return all the key value in array form
const array = Object.entries(circle); //Storing  key values into array
for(let value of array){ // iterating array
    console.log(value)
}

if('radius' in circle) console.log("yes")



