interface User {
  [key: string]: any;
  age: number,
  user: string,
  occupation: string,
}

type userOrAdmin = User | Admin;

let persons: userOrAdmin[] = [
  {
    age: 22,
    user: "Ali",
    occupation: "Doctor",
  },
  {
    age: 23,
    user: "Fahad",
    occupation: "Doctor",
  },
  {
    age: 26,
    user: "Rasher",
    occupation: "Doctor",
  },
  {
    age: 40,
    name: "Ibrahim",
    specialty: "Admin",
  },
  {
    age: 42,
    name: "Mubark",
    specialty: "Admin",
  },
  {
    age: 40,
    name: "Saad",
    specialty: "Admin",
  },
];

function print() {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i]["occupation"]) {
      console.log(
        `The Doctor name is: ${persons[i].user}, his occupation is ${persons[i].occupation}`
      );
    } else if (persons[i]["specialty"]) {
      console.log(
        `The Admin aname is: ${persons[i].name}, his occupation is ${persons[i].specialty}`
      );
    }
  }
}
print();

interface Admin {
  [key: string]: any;
  age: number,
  name: string,
  specialty: string,
}

function changeAge(name: string, age: number) {
  for (let i of persons) {
    if(i.name === name)  i.age = age 
  }
  console.log(persons);
  
}
(changeAge("Mubark", 38));

export {};
