l/Q1. Program to find particular character in a string //
let str = "LetsUpgrade";
console.log(str);
console.log(str.indexOf("s"));

//Q2. Program to convert minutes to seconds

let minutes = 30;

seconds = minutes * 60;
console.log("30 " + " Min " + " into sec is " + seconds);

//Q3. Program to search element in a array of strings
var array = [-10, -20, 30, -40, -50];

var found = array.find(function (element) {
return element > 0;
});
console.log(found);




//Q5. Print an array in reverse order
Array = ["Animal","Fruits","Vegetables"];
console.log(Array);
Array = ["Animal","Fruits","Vegetables"].reverse();
console.log(Array);