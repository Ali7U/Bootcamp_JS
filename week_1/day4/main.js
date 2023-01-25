let firstName = "Ali";
let secoundName = "Ibrahim";
let lastName = "Al-Guaideb";

const date = "2001-05-01";
const week = 7;

console.log(typeof firstName, typeof lastName, typeof secoundName);

function hello(firstName, secoundName, lastName) {
  console.log(
    `Hello ${firstName}  your father's name is ${secoundName} and your family is ${lastName}`
  );
}

hello("Turkey", "Ibrahim", "Al-Guaideb");

let frutes = ["orange", "Apple", "Limon", "watermelon"];
for (let i = 0; i < frutes.length; i++) {
  if (frutes[i] === "Apple") {
    console.log("currect");
  } else {
    console.log("uncurrect");
  }
}

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(3, 5));

function sub(num1, num2) {
  return num1 - num2;
}
console.log(sub(3, 5));

function mul(num1, num2) {
  return num1 * num2;
}
console.log(mul(3, 5));

function adv(num1, num2) {
  return num1 / num2;
}
console.log(adv(10, 5));

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function ifBigger(firstNum, secoundNum) {
  let sum = firstNum + secoundNum;
  let isBigger;
  if (sum >= 100) {
    isBigger = "the number is equal or bigger";
  } else {
    isBigger = "the number less than 100";
  }
  return isBigger;
}

console.log(ifBigger(32, 77));

function avg(num1, num2) {
  return (num1 + num2) / 2;
}
console.log(avg(22, 88));

function tax(num) {
  return num * 0.015;
}
console.log(tax(30), ` the price 30`);

let num = 30;
switch (num % 2) {
  case 0:
    console.log("its even number");
    break;
  case 1:
    console.log("its odd number");
    break;
  default:
    console.log("not found");
}

let degree = 66;
let grade;
if (degree >= 95) {
  grade = "A+";
} else if (degree >= 90) {
  grade = "A";
} else if (degree >= 85) {
  grade = "B+";
} else if (degree >= 80) {
  grade = "B";
} else if (degree >= 75) {
  grade = "C+";
} else if (degree >= 60) {
  grade = "C";
} else if (degree >= 55) {
  grade = "D+";
} else if (degree >= 50) {
  grade = "D";
} else {
  grade = "F";
}
console.log(grade);

for (let i = 1; i <= 10; i++) {
  console.log(i ** 2);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

let daysOfYear = 365
function culcAge(yourAge){
    return yourAge * daysOfYear;
}
console.log(culcAge(22));


function leapYear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}
console.log(leapYear(1900));
console.log(leapYear(1904));
console.log(leapYear(2000));
console.log(leapYear(2004));
console.log(leapYear(2020));
console.log(leapYear(2023));


for(let i = 1; i <= 8; i++){
    for(let j = 1; j <=  i  ; j++){
        console.log(j)
    }
    console.log(``);
}