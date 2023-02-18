const myArray = ["apple", "guava", "grapes"];

function* iterate(array) {
  let index = 0;

  while (index < array.length)
  {
      yield array[index++];

  } 
}

const fruit = iterate(myArray);
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());





