// Here Write My Current write code and my learning code. 👇

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

// Type Assertion 👇

let valueString: any = "Hello"

let valueNumber:number = (valueString as String).length // When You are forcefully assign data type.

type Book = {
  name: String
}

let checkValue = `{"name":"Nikhil"}`

let typeCheckValue = JSON.parse(checkValue) as Book

console.log(typeCheckValue.name)

// Now Let's Understand what is difference betweem Unknown or Any Data Type

let num : any; // Any Data Type Case.

num = "Hello"
num = [2,85,46,5]
num = true
// num.toUpperCase() // Development time error was not showing but when a program execute error throw.

let str: unknown;

str = false
str = "Bye"
str = 55
str = [1,2,3,4,5] 
str = "Hi"

// str.toUpperCase() // Here With Unknown Data type you cannot use this way because when you want to use variable to apply method on that variable you must be need variable Data Type That's why here need first check which data type variable we have.

// Check First DataType 👇

if(typeof str === "string"){
  str.toUpperCase() // Now Once they check you show appling method.
  console.log(str)
}

let data: unknown = "How are you"

let strData: String = (data as String)

console.log(strData.length)

try {
  
} catch (error : any) { 
  if(error instanceof Error){ // Check the type of error and according to it we show it.
    console.log(error.message)
  }
}

type role = "Admin" | "User" | "Owner";

function assignRole(Role: role){
  if(Role === "Admin"){
    console.log(`Redirect to Admin Page`)
    return
  }
  if(Role === "User"){
    console.log(`Redirect to User Page`)
    return
  }
  Role // Never Data Type Show if any type of data type you missed to assign above in condition.
}