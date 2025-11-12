// Here we are Practice with my own effort 😊

//Example learn :- How String work, with all methods and figure out how we solvw that particular problem with using string and all methods.

function log(val) {
  console.log(val);
}

// // 1. Predict the output questions 👇

// myFunc();

// var myFunc = function () {
//   console.log("First");
// };
// myFunc();
// function myFunc() {
//   console.log("Second");
// };
// myFunc();

// var variable = 10;

// (() => {
//   log(variable)
//   variable = 20
//   log(variable)
// })();
// log(variable)
// var variable = 30
// log(variable)

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// var fullname = "Piyush Garg"

// var obj = {
//     fullname: "Nikhil",
//     prop: {
//         fullname: "Inside Nikhil",
//         getFullName: function (){
//             return this.fullname
//         }
//     },
//     getFullName: function (){
//         return this.fullname
//     },
//     getFullNameV2: () => {
//         return this.fullname
//     },
//     getFullNameV3: (function () {
//         return this.fullname;
//     })() 
// }
// log(obj.prop.getFullName())
// log(obj.getFullName())
// log(obj.getFullNameV2())
// log(obj.getFullNameV3)

// const piyush = {
//     name: "Piyush",
//     sayHello: function (){
//         log(this.name)
//     }
// }
// const nikhil = {
//     name: "Nikhil",
//     sayHello: function(){
//         log(this.name)
//     }
// }

// nikhil.sayHello.call(piyush)

const obj = {
    height: 5
}
log(obj.height)
delete obj.height;
console.log(obj.height)


