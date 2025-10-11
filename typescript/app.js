"use strict";
// let arr : number[] = [1,2,3,4,5,6]
Object.defineProperty(exports, "__esModule", { value: true });
// let arr : [string, number, ...string[]];
// arr = ["kaka", 44, "Hello", "ghs"]
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
//# sourceMappingURL=app.js.map