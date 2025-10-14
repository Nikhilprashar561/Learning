var arr = [1, 2, 3, 4, 5, 6];
var arr;
arr = ["kaka", 44, "Hello", "ghs"];
var userRole;
(function (userRole) {
    userRole["admin"] = "ADMIN";
    userRole["normal"] = "NORMAL";
    userRole["editor"] = "EDITOR";
})(userRole || (userRole = {}));
function checkAccess(role) {
    if (role === userRole.admin) {
        console.log("WOW I'm So Happy You're ".concat(userRole.admin));
    }
    else if (role === userRole.normal) {
        console.log("WOW I'm not Happy You're ".concat(userRole.normal, " My Advise You Must Be Upgrade Your Self"));
    }
    else {
        console.log("You're ".concat(userRole.editor, " You have a full Access to do anything what you want"));
    }
}
checkAccess(userRole.editor);
// console.log(userRole)
var a = 10; // When typeScript automatically fetch vairable which data type of value user store this is called "Type Infrence".
// Below Type annotations 👇 :- When user define Which data type of value they are store in variable.
var b;
function check(a, b) {
    console.log("First value of ".concat(a, " and then second ").concat(b));
}
check(28, "May");
function check(obj, oj) {
    console.log(obj.name);
    console.log(oj.mobile);
    // console.log(oj.password)
}
check({ name: "Nikhil" }, { mobile: 6239130326 });
var obj1 = {
    age: 25,
    username: "Nikhil",
    isVerified: false,
    // // email:"sj" if value is not define in interface here you cannot add any aditional value here.
};
var object = {
    email: "nikhil@gmail.com",
    username: "Nikhil_525"
};
var dev = {
    name: "Nikhil",
    email: "nikhil@gmail.com",
    role: "Backend Developer",
};
var currentStatus = "pending";
currentStatus = "success"; // ✅
var emp = {
    name: "Nikhil",
    age: 22,
    city: "Delhi",
    country: "India",
    role: "Backend Developer",
};
Classes;
var student = /** @class */ (function () {
    function student() {
        this.name = "Nikhil";
        this.phn = 6239130326;
    }
    return student;
}());
var p = new student();
console.log(p);
var student = /** @class */ (function () {
    function student(name, age, isVerfied, mobile_no) {
        this.name = name;
        this.age = age;
        this.isVerified = isVerfied;
        this.mobile_no = mobile_no;
    }
    student.prototype.start = function () {
        console.log("Name of the student ".concat(this.name, " it's age ").concat(this.age, " isVerified ").concat(this.isVerified, " there mobile no. ").concat(this.mobile_no));
    };
    return student;
}());
var nikhil = new student("Nikhil", 20, true, 6239130326);
var raja = new student("Rajvir", 21, false, 62326);
var yuvraj = new student("Yuvraj", 19, true, 39451303);
nikhil.start();
raja.start();
yuvraj.start();
var Stud = /** @class */ (function () {
    function Stud(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(Stud.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stud.prototype, "nname", {
        set: function (name) {
            this._name = this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Stud;
}());
var u = new Stud("Nikhil", 20);
function abcd(name, age, cb) {
    cb(62393036);
}
abcd("Nikhil", 20, function (arg) {
    console.log(arg);
});
