

const sum = (a,b)=>{
    alert(a+b)
}
let a=setInterval(sum, 2000,1,2)

setTimeout(function(){
    clearInterval(a);
},8000)
// clearInterval(a)