

function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
     console.log({value:n, done:false});
      }
    };
  }
  
  // Create Iterable
  const n = myNumbers();
  n.next(); // Returns 10
  n.next(); // Returns 20
  n.next(); // Returns 30
  console.log(n)

