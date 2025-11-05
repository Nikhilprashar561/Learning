// Here We are Practice some amount of good interview question prepare for interview .

// 1. Clousre in javascript parent function inside we call child function and use some value of parent function 👇

// "use strict"

a = 12

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