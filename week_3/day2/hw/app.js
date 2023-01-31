"use strict";
exports.__esModule = true;
var persons = [
    {
        age: 22,
        user: "Ali",
        occupation: "Doctor"
    },
    {
        age: 23,
        user: "Fahad",
        occupation: "Doctor"
    },
    {
        age: 26,
        user: "Rasher",
        occupation: "Doctor"
    },
    {
        age: 40,
        name: "Ibrahim",
        specialty: "Admin"
    },
    {
        age: 42,
        name: "Mubark",
        specialty: "Admin"
    },
    {
        age: 40,
        name: "Saad",
        specialty: "Admin"
    },
];
function print() {
    for (var i = 0; i < persons.length; i++) {
        if (persons[i]["occupation"]) {
            console.log("The Doctor name is: ".concat(persons[i].user, ", his occupation is ").concat(persons[i].occupation));
        }
        else if (persons[i]["specialty"]) {
            console.log("The Admin aname is: ".concat(persons[i].name, ", his occupation is ").concat(persons[i].specialty));
        }
    }
}
print();
function changeAge(name, age) {
    for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
        var i = persons_1[_i];
        if (i.name === name)
            i.age = age;
    }
    console.log(persons);
}
(changeAge("Mubark", 38));
