function name(){
    let n=10;
    function inner(){
        return ++n;
    }
    return inner;
}
const fun=name();
let sum= fun()
console.log(fun);
console.log(sum);