// Iterate over the cars array and log the brand and model of each car

var cars = [
  { brand: "Toyota", model: "Corolla", year: 2022 },
  { brand: "Honda", model: "Civic", year: 2021 },
  { brand: "Ford", model: "Fusion", year: 2020 },
]

cars.forEach((Element) => {
    console.log(`brand: ${Element.brand}, model: ${Element.model}`);
})
