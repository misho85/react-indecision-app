//================================

class OldSyntax {
  constructor() {
    this.name = 'Mika';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi. My Name is ${this.name}.`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting
console.log(getGreeting());

//---------------------------------

class NewSyntax {
  name= 'Glupan';
  getGreeting = () => {
    return `Hi. My Name is ${this.name}.`;
  }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());

//=================================