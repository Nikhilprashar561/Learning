let subs: number | string = "Hello"; // That is Union Where We are Excepting more than two values from one variable

let airlineSeat: "Window" | "Middle" | "Aside" = "Window"; // Union you can also define custom data type

let a: any = 45 + "55"; // Mean With any data type you can store any type of data whatever it is number, string, boolean.
console.log(a);

let b: unknown;

// Type Narrowing in TS

function getChai(kind: String | number) {
  if (typeof kind === "string") {
    return `Making ${kind} this is Awesome.`;
  }
  return `Making number of ${kind} this way`;
}

function ServiceChai(msg?: String) {
  if (msg) {
    return `This is ${msg}`;
  }
  return `Message was not Recevied`;
}

function myChai(size: "small" | "medium" | "full") {
  if (size === "small") {
    return `This is ${size} chai`;
  }
  if (size === "medium" || size === "full") {
    return `This is ${size} chai`;
  }
  return `This is ${size} chai`;
}

class kulladChai{
  serve(){
    return `Serve Khullad Chai`
  }
}
class MasalaChai{
  serve(){
    return `Serve Masala Chai`
  }
}
function validateChai(chai: MasalaChai | kulladChai){
  if(chai instanceof kulladChai){
    return chai.serve()
  }
}

type chaiSutta = {
  type : String
  Sutta: number
}

type ElachiChai = {type: "Elachi"; ingrediant: number}
type MassalaChai = {type: "Masala"; ingrediant: number}
type AdarkChai = {type: "Adarak"; ingrediant: number}

type chaiLevel = ElachiChai | MassalaChai | AdarkChai

function checkChai(chai : chaiLevel){
  switch(chai.type){
    case "Elachi":
      return `Elachi`
      break;
  }
}