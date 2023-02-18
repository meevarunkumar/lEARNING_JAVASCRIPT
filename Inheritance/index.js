class Animal{
    constructor(name,color){
        this.name=name;

        this.color=color;
        console.log("animal")
    }
    shout(){
        console.log( this.name + "i am shouting");
    }
    run(){
        console.log( this.name+"Running");
    }
    eat(){
        console.log("eating")
    }
}
class Monkey extends Animal{
    constructor(name,color,age){
        super(name,color)
        this.name=name;
        this.color=color
        this.age=age
        console.log("moneky constructor")
    }
    eat(){
        console.log("eating in monkey")
    }
}
// let a= new Animal("lion" , "yellow")
let b = new Monkey("monkey","brown",23)
// console.log(a);
console.log(b);
// a.shout()
// b.shout()
// b.eat()