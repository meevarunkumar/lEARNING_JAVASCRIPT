let arr =[1,2,3,4,5]

//foreach method

arr.forEach((element)=>{
    console.log(element + " map ")
})

//filter method 
let filter = arr.filter((element)=>{
    return element>3
})
console.log(filter);

//map method

let map = arr.map((element)=>{
    return element+" map "
})
console.log(map);

let reduce = arr.reduce((a,b)=>{
    return a*b;
})
console.log(reduce);