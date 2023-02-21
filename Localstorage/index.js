let key = prompt("enter the key")
let value= prompt("enter the value")

localStorage.setItem(key,value)
console.log(localStorage.getItem(key));
if(key=="clear"){
    
    localStorage.clear()
}
