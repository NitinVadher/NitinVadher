// Iterate over the cars array and log the brand of cars that were manufactured after 2020.

var cars = [ { brand: "Toyota", model: "Corolla", year: 2022 }, 
            { brand: "Honda", model: "Civic", year: 2021 }, 
            { brand: "Ford", model: "Fusion", year: 2020 }]
  
  cars.forEach((Element) => {
      if (Element.year > 2020)
      {
          console.log(Element.brand)
        }
  })
  