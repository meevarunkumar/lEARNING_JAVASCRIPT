class Rectangle{
  constructor(h, w){
      this.height=h
      this.width=w
    }
    doubleHieght(){
        return this.height*2
    }
    doubleWidth(){
        return this.width*2
    }
}

let rec = new Rectangle(10,20)
console.log(rec);
console.log(rec.doubleHieght())
console.log(rec.doubleWidth())
let rec2 = new Rectangle(40,50)
console.log(rec2);

console.log(rec2.doubleHieght())
console.log(rec2.doubleWidth())