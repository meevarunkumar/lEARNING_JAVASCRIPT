const myArray = ["apple", "guava", "grapes"];
for(let i=0;i<myArray.length;i++){
    const fruit= iterate(myArray)
    console.log(fruit.next());
}

function iterate(array) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
         return {
          value: array[++index],
          done: false,
        }
     
      }
     else{
        return {
            done:true,
        }
    }
    }
 }
}
