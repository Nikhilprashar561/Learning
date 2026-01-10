// Here We are Store my all write code. (Previous) 👇

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


// Interface in TypeScript 👇

interface chaiSelect {
  sugar: String,
  quantity: number
}

type TeaType = "Masala" | "Cold" | "Hot"
type TeaSize = {
  size : "Namak" | "Ginger" | "Chilled"
  username? : String // Optional
  readonly appname : String // Once you assign a name to this property you cannot change it again because then they became only read.
}

type combine = TeaType & TeaSize // Combine Above declared type.

function teaGet(t:TeaType){
  console.log(t)
}
teaGet("Hot")

// Here Write My Current write code and my learning code. 👇

// Objects in Typesript with type

type items = {name: String, class: String}
type adress = {state: String , country: String, pincode: number}

type userH = {
    id: String,
    item: items[],
    location : adress[]
}

type chaiH = {
    name?: String,
    price: String,
    quantity: String
}

const deliveryChai = (update: Partial<chaiH>) => {
    console.log(`yeh hai apki Chai ${update.name}`)
}
deliveryChai({name: "Masala"})

const req = (r: Required<chaiH>) => {
    console.log(`Yeh Value to must hai ${r.price}`)
}
req({price: "25", quantity: "3", name: "Adarak"})

type p = Pick<chaiH, "name" | "price">

const pick = (p: p) => {
    console.log(`Yeh Hai Picked Value ${p.price}`)
}

pick({name: "420", price: "86"})

// Functions is TS

function greet(name: String = "Nikhil", id: number){
    console.log(name, id)
}
greet("Prashat", 95)

function hi():number {
    return 25
}

// Array in TS 👇

const arr: string[] = ["Hello", "Bahi"]
const arr1: Array<number> = [52, 55]
const arr2 : readonly [ string ] = ["Hello"]

// Tuples in TS 👇

let user: [number, string, boolean] = [1, "Nikhil", true];

console.log(user[0]); // 1
console.log(user[1]); // Nikhil
console.log(user[2]); // true

let employee: [number, string, string?];

employee = [101, "Rahul"];
employee = [102, "Amit", "Developer"];

let point: readonly [number, number] = [10, 20];

// Enum in TS 👇

enum Status {
  Success,
  Failure,
  Pending
}

const checkStatus = Status.Success

enum HttpCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401
}

let code: HttpCode = HttpCode.BadRequest;

// Class in TS 👇

class chai{
    name:String
    email:String
    constructor (name:String, email:String){
        this.name = name,
        this.email = email
    }
}

const userr = new chai("Name", "Email")
userr.name = "Nikhil"
console.log(userr.name)

class getSte {
    private _sugar = 25

    get sugar(){
        return this._sugar
    }
    set sugar(value:number){
        this._sugar = value
    }
}

const gs = new getSte()
gs.sugar = 25
console.log(gs.sugar)

class Heater {
    Heat(){}
}

class newHeat {
    constructor(private heat : Heater){}
    make(){
        this.heat.Heat
    }
}