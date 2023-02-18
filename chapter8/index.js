let a =setInterval(function(){
document.getElementById("b").classList.toggle("bulb")
},100)

setTimeout(function(){
    clearInterval(a);
},5000)
