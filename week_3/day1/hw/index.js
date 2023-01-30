"use strict";
exports.__esModule = true;
function honk() {
    console.log("honk honk");
}
var newCars = [
    {
        make: "Kia",
        model: "SP",
        year: 2022,
        honk: function () {
            console.log("Kia honk");
        }
    },
    {
        make: "Ford",
        model: "King Ranch",
        year: 2019,
        honk: function () {
            console.log("Ford honk");
        }
    },
    {
        make: "Toyota",
        model: "S",
        year: 2022,
        honk: function () {
            console.log("Toyota honk");
        }
    },
];
console.log(newCars);
