//noraml object creation

const circ = {
    radius: 40,
    draw: function () {
        console.log("circ")
    }
}
const x = {};
for (let key in circ) {//Old way of cloning the object
    x[key] = circ[key]
}
console.log(x)

const z = Object.assign( {name:"z"},circ) // new way of cloning oject
console.log(z)
const c = { ...circ };// simplest way of cloning 
console.log(c)