

setInterval(() => {
    let a = new Date();
    let hour=a.getHours()
    let minute=a.getMinutes()
    let second=a.getSeconds()
    if(hour<=9){
        hour= '0' + hour;
      
    }
    if(minute<=9){
        minute= '0' + minute
    }
    if(second<=9){
        second='0'+ second
    }
 let hours= document.getElementById("clock").innerHTML = hour+ ':' + minute+ ':' + second; 
}, 1000);

