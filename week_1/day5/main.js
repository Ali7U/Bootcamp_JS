const weekDays = ["Sunday", "Monday", "Tuesday"];
const week = ["Wednisday", "ThursDay"];
const allWeek = weekDays.concat(week);
console.log(allWeek);

const words = ["knot", "roof", "snake", "humanity", "available", "automatic"];

const longWords = words.filter((prev) => prev.length > 6);
console.log(longWords);
const shortWords = words.filter((prev) => prev.length === 4);
console.log(shortWords);

const num = [1, 9, 16, 15, 36, 45];
let multyNum = num.map((currentValue) => currentValue * currentValue);
console.log(multyNum);

let squareNumber = [];
for (let i = 0; i < num.length; i++) {
  squareNumber.push(num[i] * num[i]);
}
console.log(squareNumber);

let isDivision = num.find((item) => {
  return item % 3 === 0 && item % 5 === 0;
});
console.log(isDivision);

// ----
let division = num.find((item) => item % 2 === 0);

console.log(division);

const newArray = allWeek.concat(num);
console.log(newArray);

const number = ["5", "6", "3"];
const findNum = number.filter((curr, index) => {
  return curr === "3";
});
console.log(findNum);

let strWeek = allWeek.join(" ");
console.log(strWeek);

let strNum = num.join(", ");
console.log(strNum);

console.log(week.reverse());

const text =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit, Eveniet beatae ut sequi ipsa, labore commodi,";

const newText = text.split(", ");
console.log(newText);
