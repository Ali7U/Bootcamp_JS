interface Car {
  make: string;
  model: string;
  year: number;
  honk() :void
}
function honk(){
  console.log("honk honk");
  
}

let firstCar: Car = {
  make: "Kua",
  model: "SP",
  year: 2022,

  honk() {
    console.log(firstCar);
  },
};
let secoundCar: Car = {
  make: "Ford",
  model: "King Ranch",
  year: 2015,

  honk() {
    console.log(secoundCar);
  },
};
let thirdCar: Car = {
  make: "Toyota",
  model: "S",
  year: 2021,

  honk() {
    console.log(thirdCar);
  },
};


let cars: Car[] = [firstCar, secoundCar, thirdCar];
for (let car of cars) {
  console.log(
    ` Make: ${car.make}, and the model: ${car.model}, year of made: ${car.year}, ${car.honk()}`
  );
}

honk();

for (let i of cars) {
  console.log(`Made in : ${i.year}`);
}

for (let i of cars) {
  console.log(`model is: ${i.make}`);
}
export{}