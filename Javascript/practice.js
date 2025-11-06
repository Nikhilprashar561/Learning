// Here is the interview practice form chatGpt and other use full sites for interview preparation

// 1. Reverse a string 👇
function reverseString(s) {
  if (s === undefined) {
    return "Please add value";
  }
  if (typeof s != "string") {
    return "Here we are olny accept String value not other types";
  }
  return s.split("").reverse().join(""); // split into chars, reverse array, join back
}
console.log(reverseString()); // 'olleh'