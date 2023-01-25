const weekDays = ["Sunday", "Monday", "Tuesday"];
const week = ["Wednisday", "Thursday"];
const allWeek = weekDays.concat(week)
console.log(allWeek);

console.log("###################");
const words = ["knot", "roof", "snake", "humanity", "available", "automatic"];

const longWords = words.filter((prev) => prev.length > 6)
console.log(longWords);
const shortWords = words.filter((prev) => prev.length === 4);
console.log(shortWords);

