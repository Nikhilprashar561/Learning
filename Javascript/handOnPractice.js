// Here we are Practice with my own effort 😊

// Example learn :- How String work, with all methods and figure out how we solvw that particular problem with using string and all methods.

function log(val) {
  console.log(val);
}

// 1. Predict the output questions 👇

myFunc();

var myFunc = function () {
  console.log("First");
};
myFunc();
function myFunc() {
  console.log("Second");
};
myFunc();

var variable = 10;

(() => {
  log(variable)
  variable = 20
  log(variable)
})();
log(variable)
var variable = 30
log(variable)

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}

var fullname = "Piyush Garg"

var obj = {
    fullname: "Nikhil",
    prop: {
        fullname: "Inside Nikhil",
        getFullName: function (){
            return this.fullname
        }
    },
    getFullName: function (){
        return this.fullname
    },
    getFullNameV2: () => {
        return this.fullname
    },
    getFullNameV3: (function () {
        return this.fullname;
    })() 
}
log(obj.prop.getFullName())
log(obj.getFullName())
log(obj.getFullNameV2())
log(obj.getFullNameV3)

const piyush = {
    name: "Piyush",
    sayHello: function (){
        log(this.name)
    }
}
const nikhil = {
    name: "Nikhil",
    sayHello: function(){
        log(this.name)
    }
}

nikhil.sayHello.call(piyush)

const obj = {
    height: 5
}
log(obj.height)
delete obj.height;
console.log(obj.height)

// Learn Prototype in JavaScript 👇

const obj = {
    name:"Nikhil",
    id:38,
    getName(){
        return `Yeh hai name user ka ${this.name}`
    }
}
const obj2 = Object.create(obj)

console.log("Yeh hai data object 1", obj)
console.log("yeh hai data object 2", obj2)
obj2.__proto__.name = "Rajaa Chor"
console.log(obj.name)

const x1 = {
    p1:"Hello Guys",
}
const x2 = {
    p2:"Hello Boys",
    __proto__: x1
}
const x3 = {
    p3:"Hello Gurls",
    __proto__: x2
}

console.log(x3.p1)
// console.log(x1.p3)

// Proxy in javaScript

const obj = {
  fname: "Nikhil",
  age: 20,
};

const objProxy = new Proxy(obj, {
  get(target, prop) {
    if (prop in target) return target[prop];
    return false;
  },
  set(target, prop, value) {
    if (!(prop in target)) throw new Error(`${prop} does not exists`);
    switch (prop) {
      case "fname":
        if (typeof value !== "string") throw new Error(`${prop} must be string`);
        break;
      case "age":
        if (typeof value !== "number") throw new Error(`${prop} must be number`);
        if (value <= 0) throw new Error(`${prop} must be > zero`);
    }
    target[prop] = value;
  },
});

objProxy.fname = 55
console.log(obj)