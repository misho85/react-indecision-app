// argument object - no longer bound with arrow functions

const add = function(a, b) {
  console.log(arguments);
  return a + b;
};

const add = (a, b) => {
  console.log(arguments);
  return a + b;
};
console.log(add(55, 2, 8));

// this keyword - no longer bound

const user = {
  name: "M150",
  cities: ["Beograd", "Kragujevac", "Novi Sad"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived());

const multi = {
  numbers: [1, 10, 23, 50, 8, 4],
  multiplyBy: 10,
  myltiply() {
    return this.numbers.map(num => num * this.multiplyBy);
  }
};
console.log(multi.myltiply());
