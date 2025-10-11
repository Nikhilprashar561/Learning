"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, 4, 5, 6];
let arr;
arr = ["kaka", 44, "Hello", "ghs"];
var userRole;
(function (userRole) {
    userRole["admin"] = "ADMIN";
    userRole["normal"] = "NORMAL";
    userRole["editor"] = "EDITOR";
})(userRole || (userRole = {}));
function checkAccess(role) {
    if (role === userRole.admin) {
        console.log(`WOW I'm So Happy You're ${userRole.admin}`);
    }
    else if (role === userRole.normal) {
        console.log(`WOW I'm not Happy You're ${userRole.normal} My Advise You Must Be Upgrade Your Self`);
    }
    else {
        console.log(`You're ${userRole.editor} You have a full Access to do anything what you want`);
    }
}
checkAccess(userRole.editor);
// console.log(userRole)
let a = 10; // When typeScript automatically fetch vairable which data type of value user store this is called "Type Infrence".
// Below Type annotations 👇 :- When user define Which data type of value they are store in variable.
let b;
function check(a, b) {
    console.log(`First value of ${a} and then second ${b}`);
}
check(28, "May");
function check(obj, oj) {
    console.log(obj.name);
    console.log(oj.mobile);
    // console.log(oj.password)
}
check({ name: "Nikhil" }, { mobile: 6239130326 });
const obj1 = {
    age: 25,
    username: "Nikhil",
    isVerified: false,
    // // email:"sj" if value is not define in interface here you cannot add any aditional value here.
};
const object = {
    email: "nikhil@gmail.com",
    username: "Nikhil_525"
};
const dev = {
    name: "Nikhil",
    email: "nikhil@gmail.com",
    role: "Backend Developer",
};
let currentStatus = "pending";
currentStatus = "success"; // ✅
const emp = {
    name: "Nikhil",
    age: 22,
    city: "Delhi",
    country: "India",
    role: "Backend Developer",
};
//# sourceMappingURL=app.js.map