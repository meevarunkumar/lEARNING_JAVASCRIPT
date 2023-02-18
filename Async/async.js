function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(46)

        } , 2000)
    })
}

 async function start(){
    let result =  await getData();
    console.log(result);
}
start()