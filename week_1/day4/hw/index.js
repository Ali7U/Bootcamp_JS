// start hw1
let name = "Ali";
let age = 22;
let isStudebt = true;
let classSchedule = ["Math", "English", "Physics", "Programming"];

if (isStudebt) {
  console.log(classSchedule);
} else {
  console.log("you are not a student");
}

for (let i = 0; i < classSchedule.length; i++) {
  console.log(classSchedule[i]);
}

function addClass(newClass) {
  return classSchedule.push(newClass);
}
console.log(addClass("chemistry"));
console.log(classSchedule);
// end hw1


