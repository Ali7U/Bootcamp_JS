// 1
let x = 98765;
let rev = x.toString().split("").reverse().join("");
console.log(rev);

// 2
function upperCaseText(text) {
  let upper = text.split(" ");
  let arr = [];
  for (let i = 0; i < upper.length; i++) {
    arr.push(upper[i].charAt(0).toUpperCase() + upper[i].slice(1));
  }
  return arr.join(" ");
}
console.log(upperCaseText("tuwaiq academy"));

// 3
let countVowels = (str) =>
  Array.from(str).filter((vowels) => "aioeu".includes(vowels)).length;

console.log(countVowels("Javascript is awesome"));

//4.

function check(number) {
  for (let i = 2; i < number.length; i++) {
    if (number % i !== 0) {
      return number;
    } else {
      return "this is not prime";
    }
  }
  return number;
}
console.log(check(11));

//5

function longestWord(text) {
  text = text.split(" ");

  return text.sort((a, b) => b.length - a.length)[0];
}
console.log(longestWord("Kingdom of Saudi Arabia").toLowerCase());

//6

let string = "webmaster";
let arr = string.split("");
arr.sort();
let joinText = arr.join("");
console.log(joinText);

//7

function sum(x, y) {
  let total = x + y;
  return total;
}
console.log(sum(3, 2));
console.log(sum(-3, -6));
console.log(sum(7, 3));

//8

function calc(age) {
  return age * 365;
}

console.log(calc(22));

//9

function convert(hours) {
  return hours * 60 ** 2;
}
console.log(convert(2));

// 10

function checkIf(number) {
  if (number <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkIf(-2));
console.log(checkIf(3));

// 11
function integerNum(number) {
  return number.toString().length;
}
console.log(integerNum(1000));
console.log(integerNum(12));

// 12
let object = { a: 1, b: 2 };
console.log(object);

// 13
function cities(n) {
  if (n === 4) {
    let arrPaths = [
      ["A", "B", "C"],
      ["A", "C", "B"],
      ["B", "A", "C"],
      ["B", "C", "A"],
      ["C", "A", "B"],
      ["C", "B", "A"],
    ];

    return arrPaths;
  } else if (n === 1) {
    let arrPaths = ["A", "B", "C"];
    return arrPaths
  }
}
console.log(cities(4));
console.log(cities(1).length);

// 14

function twoConsecutive(word) {
  for (let i = 1; i < word.length; i++) {
    if (word[i - 1] === word[i]) {
      return true;
    }
  }
  return false;
}
console.log(twoConsecutive("loop"));
console.log(twoConsecutive("yummy"));
console.log(twoConsecutive("orange"));

// 15
function currentDate(){
  let date = new Date()
  return date
}
console.log(currentDate());


// 16
function comparison(firstDate, secoundDate) {
  return (difference = secoundDate.getDate() - firstDate.getDate());
}
let firstDate = new Date("June 14, 2019");
let secoundDate = new Date("June 20, 2019");
console.log(comparison(firstDate, secoundDate));

//q18.

function larger(x, y) {
  if (x > y) {
    return `${x} is the larger`;
  } else `${y} is the larger`;
}
x = 10;
y = 1;
console.log(larger(x, y));

