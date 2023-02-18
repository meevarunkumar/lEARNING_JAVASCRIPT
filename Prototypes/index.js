// const user={
//     name:"sunil",
//     role:"developer",
//     age:22,
//     show:function(){
//         console.log(this.role)
//     }

// }
// const varun={
// name:"varun"
// }
// varun.__proto__=user 
// varun.show()
// // console.log(user);

 function User(name,age){
    this.name=name;
    this.age=age;
}
let v=new User("varun", 22)
let s=new User("sunil", 22)
v.car="audi"
User.prototype.role="developer"
User.prototype.car="bmw"
User.prototype.c= function(){
    console.log(this)
}
console.log(v.car)
console.log(s.car)
v.c()

