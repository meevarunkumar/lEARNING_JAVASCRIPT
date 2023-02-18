const fs = require("fs")



let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        fs.writeFile("file.txt", "this is file 2 habing good documnets", (err) => {
            if (!err) {

                resolve("data is added succesfully")
              }
            else {
                reject("file alerady exist")
            }
        })
    }, 3000)
})




p.then((value)=>{
  console.log(value +" inside then")
        return new Promise((resolve,reject)=>{
            fs.readFile("file4.txt","utf-8",(err,data)=>{
                if(!err){
                    resolve(data)
                }
                else{
                    reject("files doesnt exist")
                }
        }) 
   
})

        
    }).catch((value)=>{
        console.log("inside 2nd then")
        console.log(value)
    })
    
 