// // let arr : number[] = [1,2,3,4,5,6]

// // let arr : [string, number, ...string[]];

// // arr = ["kaka", 44, "Hello", "ghs"]

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

interface user {
  name?: String,
  mobile?:Number,
  email?:String
}
interface Admin extends user{
  password?: String
}

function check(obj: user, oj: Admin){
  console.log(obj.name)
  console.log(oj.mobile)
  // console.log(oj.password)
}
check({name:"Nikhil"}, {mobile:6239130326})

interface obj{
  username:String,
  age:Number,
  isVerified:boolean
}
const obj1 : obj = {
  age: 25,
  username:"Nikhil",
  isVerified: false,
  // email:"sj" if value is not define in interface here you cannot add any aditional value here.
}