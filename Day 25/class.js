class car {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  getCarInfo() {
    console.log(`${this.brand} ${this.model} (${this.year}) - ${this.color}`);
  }
  getCarAge(currentYear) {
    console.log(`${currentYear - this.year} years old`);
  }
}

var car1 = new car("Toyota", "Camry", 2015, "Black");
var car2 = new car("Honda", "Civic", 2018, "White");
var car3 = new car("Tesla", "Model S", 2020, "Red");


car1.getCarInfo()
car1.getCarAge(2024)

car2.getCarInfo();
car2.getCarAge(2024);

car3.getCarInfo();
car3.getCarAge(2024);
