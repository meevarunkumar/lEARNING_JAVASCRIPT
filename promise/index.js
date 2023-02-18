

let p = new Promise((resolve,reject) => {
    resolve(10)
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("Already done")
    },0000)
})
let p2= new Promise((resolve,reject) => {
    resolve(11)
    console.log("promise is pending");
    setTimeout(()=>{
        console.log("i got rejected")
    },0000)
    // reject(new Error("error"))
})
console.log(p)
console.log(p2)


