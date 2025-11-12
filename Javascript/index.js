// Here We are Practice some amount of good interview question prepare for interview .watching videos form youtube

// 1. Clousre in javascript parent function inside we call child function and use some value of parent function 👇
const abc = () => {
  var x = 28;
  console.log(`Hello`);
  return () => {
    console.log(`Yeh hai wo value ${x}`);
    let y = "Nikhil";
    return () => {
      console.log(`Yeh hai ek developer ${y}`);
      let t = [1, 2, 3, 4, 5, 6];
      return () => {
        console.log(`yeh hai array ${t}`);
      };
    };
  };
};
const ans = abc();
const data = ans();
const val = data();
const arr = val();

// Deep Copy and Deep Shallow copy in javaScript 👇

const am = {
    name:"Nikhil",
    class:"BSC IT 5th"
}
const obj = {...am}
obj.class= "bsc"
console.log(am)
console.log(obj)

const obj = {
  name: "Nikhil",
  email: "nikhilprashar561gmial.com",
  password: "3215",
  social: {
    insta: {
      public: {
        username: "nikhilprahar",
        password: 123,
      },
      private: {
        username: "prasharnikhill",
        password: 321,
        screenLock: {
          homelock: "number",
          lockscreen: "pattern",
        },
      },
    },
    youtube: {
      username: "nikhilji",
      password: 15951,
    },
  },
  offical: true,
};

const json = JSON.parse(JSON.stringify(obj))
json.social.insta.public.password = "Anchal Priya"
console.log(obj.social.insta.public.password)
console.log(json.social.insta.public.password)
console.log(typeof obj);

function makeDeepCopy(ob) {
  if (typeof ob !== "object" || ob === null) {
    return ob;
  }
  var codyVal = Array.isArray(ob) ? [] : {}
//   console.log(`yeh hai copyval ${codyVal}`)
  var keys = Object.keys(ob)
//   console.log(`yeh hai keys ${keys}`)
  for(var i=0;i < keys.length; i++){
    codyVal[keys[i]] = makeDeepCopy(ob[keys[i]])
  }
  return codyVal
}
var copy = makeDeepCopy(obj);
// console.log(copy.name)
copy.name = "Komal"
console.log(obj.name)
console.log(copy)

// Before ES6 Best way to writing a Object in JavaScript Using a Function Constructor 👇

function Person(fullname, className, roll_no,location){
  this.fullname = fullname,
  this.className = className,
  this.roll_no = roll_no,
  this.location = location
  this.getName = function (){
    console.log(this.className)
  }
}
const Nikhil = new Person("Nikhil", "BSC IT", 253805, "Pathankot")
console.log(Nikhil.getName())

// After ES Best Way to writing a object in JavaScript using Class of constructor 👇

class Employee {
  constructor(fullname, position, location, mobile){
    this.fullname = fullname,
    this.position = position,
    this.location = location,
    this.mobile = mobile
  }
  getFullname(){
    console.log(this.fullname)
  }
  getPostion(){
    console.log(this.position)
  }
}
const dev = new Employee("Kaka", "AWS", "PTK", 5215)
console.log(dev)
log(dev.getPostion())