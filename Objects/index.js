// function User(name,age){
//     this.name=name;
//     this.age=age;
// }


// let user = new User("varun",22,)
// let user2 = new User("sunil",22,)
// User.prototype.role="develpoer"
// User.prototype.hobby="dacne"
// console.log(user.hobby);
// console.log(user2.role);

const fun =function(){
    console.log(this.name + " enjoys game ")
   }

const varun = {
    name: "blackdevil",
  
}
const fantastic = {
    name: "blackFantastic",
    role: "frontassaulter"
}
// // varun.__proto__=fantastic
// fantastic.__proto__=varun
// // console.log(varun.role)
// varun.fun()
// fun.call(fantastic)
// fun.call(varun)
let varunUser=fun.bind(varun)
let fantu=fun.bind(fantastic)
varunUser()
fantu()

