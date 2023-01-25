// let myBirthDay = 2001;
let myBirthDay = new Date("05/01/2001");
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let monthName = month[myBirthDay.getMonth()];
let day = myBirthDay.getDate();
console.log(myBirthDay);
console.log(monthName);
console.log(day);
myCurrentMonth = monthName;
myCurrentDay = day;

if (myCurrentDay && myCurrentMonth === new Date()) {
  console.log("congratulating");
} else {
  console.log(
    `Hello, you born in month ${myCurrentMonth}, on day ${myCurrentDay}`
  );
}

// Ch
const books = [
  {
    title: "History",
    author: "Walled Asaad",
    numberOfPages: 300,
    isAvailable: true,
  },
  {
    title: "Math",
    author: "Feras Nasser",
    numberOfPages: 150,
    isAvailable: true,
  },
  {
    title: "JavaScript",
    author: "Saud Ibrahim",
    numberOfPages: 600,
    isAvailable: true,
  },
  {
    title: "Bad guys",
    author: "Ahmed Khaled",
    numberOfPages: 200,
    isAvailable: false,
  },
  {
    title: "Kingdom",
    author: "Rashed Ibrahim",
    numberOfPages: 600,
    isAvailable: true,
  },
];

for (let i = 0; i < books.length; i++) {
  console.log(
    ` the ${books[i].title} by the author ${
      books[i].author
    } contains the number of pages of the book ${
      books[i].numberOfPages
    } and the book is ${
      books[i].isAvailable ? "available" : "not available"
    } for sale`
  );
}
