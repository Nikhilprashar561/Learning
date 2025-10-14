// let arr : number[] = [1,2,3,4,5,6]
// let arr : [string, number, ...string[]];
// arr = ["kaka", 44, "Hello", "ghs"]
// enum userRole {
//   admin = "ADMIN",
//   normal = "NORMAL",
//   editor = "EDITOR",
// }
// function checkAccess(role: userRole) {
//   if (role === userRole.admin) {
//     console.log(`WOW I'm So Happy You're ${userRole.admin}`);
//   } else if (role === userRole.normal) {
//     console.log(
//       `WOW I'm not Happy You're ${userRole.normal} My Advise You Must Be Upgrade Your Self`
//     );
//   } else {
//     console.log(
//       `You're ${userRole.editor} You have a full Access to do anything what you want`
//     );
//   }
// }
// checkAccess(userRole.editor)
// // console.log(userRole)
// let a = 10; // When typeScript automatically fetch vairable which data type of value user store this is called "Type Infrence".
// // Below Type annotations 👇 :- When user define Which data type of value they are store in variable.
// let b: number | boolean;
// function check(a: number, b: string){
//   console.log(`First value of ${a} and then second ${b}`)
// }
// check(28, "May")
// // Below interface and types 👇
// interface user {
//   name?: String,
//   mobile?:Number,
//   email?:String
// }
// interface Admin extends user{
//   password?: String
// }
// function check(obj: user, oj: Admin){
//   console.log(obj.name)
//   console.log(oj.mobile)
//   // console.log(oj.password)
// }
// check({name:"Nikhil"}, {mobile:6239130326})
// interface obj{
//   username:String,
//   age:Number,
//   isVerified:boolean
// }
// const obj1 : obj = {
//   age: 25,
//   username:"Nikhil",
//   isVerified: false,
//   // // email:"sj" if value is not define in interface here you cannot add any aditional value here.
// }
// interface abcd{
//   email:String,
// }
// interface abcd{
//   username:String
// }
// const object : abcd = {
//   email:"nikhil@gmail.com",
//   username:"Nikhil_525"
// }
// // // Below is Types 👇 how we can define a type ..
// type Person = {
//   name: string;
// };
// type Contact = {
//   email: string;
// };
// type Employee = Person & Contact & {
//   role: string;
// };
// const dev: Employee = {
//   name: "Nikhil",
//   email: "nikhil@gmail.com",
//   role: "Backend Developer",
// };
// type Status = "pending" | "success" | "failed";
// let currentStatus: Status = "pending";
// currentStatus = "success"; // ✅
// // currentStatus = "error"; // ❌
// // // Below we are using a both interface and types 👇
// interface Person {
//   name: string;
//   age: number;
// }
// type Address = {
//   city: string;
//   country: string;
// };
// type Employee = Person & Address & {
//   role: string;
// };
// const emp: Employee = {
//   name: "Nikhil",
//   age: 22,
//   city: "Delhi",
//   country: "India",
//   role: "Backend Developer",
// };
// Classes 👇
// class student{
//     name = "Nikhil"
//     phn = 6239130326
// }
// let p = new student()
// console.log(p)
// class student {
//   name: String;
//   age: number;
//   isVerified: Boolean;
//   mobile_no?: number;
//   constructor(
//     name: String,
//     age: number,
//     isVerfied: Boolean,
//     mobile_no: number
//   ) {
//     this.name = name;
//     this.age = age;
//     this.isVerified = isVerfied;
//     this.mobile_no = mobile_no;
//   }
//   start() {
//     console.log(
//       `Name of the student ${this.name} it's age ${this.age} isVerified ${this.isVerified} there mobile no. ${this.mobile_no}`
//     );
//   }
// }
// const nikhil = new student("Nikhil", 20, true, 6239130326);
// const raja = new student("Rajvir", 21, false, 62326);
// const yuvraj = new student("Yuvraj", 19, true, 39451303);
// nikhil.start()
// raja.start()
// yuvraj.start()
// class Stud{
//     constructor(public _name:String, public age:number){}
//     get name(){
//         return this._name
//     }
//     set nname(name: string){
//         this._name = this._name
//     }
// }
// let u = new Stud("Nikhil", 20)
// function abcd(name: String, age: number, cb: (phn: number) => void){
//     cb(62393036)
// }
// abcd("Nikhil",20, (arg) => {
//     console.log(arg)
// } )
// function any(a: any){
//     console.log(`This is the value of a ${a} and that ${typeof a}`)
// }
// any("Nikhil")
// any(12)
// any(true)
// function start<N>(any: N, Area: String = "Ptk", Distance: number = 40 ){
//     console.log(`This is a ${any} and ${typeof any} from ${Area} and ${Distance}`)
// }
// start("Nikhil")
// start(45, "Raja", 85)
// Till know complete the tutorial of the Typescript Domination
