class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major; // ispituje true ili false
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += `Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`
    }
    return greeting;
  }
}


const me = new Traveler("M150", 32, 'Belgrade');
// console.log(me.getDescription());
console.log(me.getGreeting());
// console.log(me.getDescription());

const other = new Traveler();
// console.log(other.getDescription());
console.log(other.getGreeting());
// console.log(other.getDescription());

