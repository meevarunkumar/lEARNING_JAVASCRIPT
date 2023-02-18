

let btn = document.getElementsByClassName("card-title")
console.log(btn)
const arr=["blue","green", "black","red","yellow"]
function color(){
    let index=Math.floor(Math.random()*5)
    for(let i=0;i<btn.length ;i++){
        btn[i].style.color=arr[index];
    }

}


