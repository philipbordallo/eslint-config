// arrow-body-style
let arrow = () => 'hello';
arrow = value => value + 1;
arrow = (value, item) => value + item;


// constructor-super
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);

    this.bark = this.bark.bind(this);
  }

  bark() {
    return 'woof';
  }
}


// generator-star-spacing
function* generator(input) {
  yield* input;
}

// object-shorthand
const object = {
  action() {
    return 'hello';
  },
}


// prefer-arrow-callback
[1, 2, 3].map(item => item + 1);


// prefer-destructuring
const { item } = object;


// prefer-rest-params
function useArguments(...args) {
  console.log(args);
}

// prefer-spread
const items = [1, 2, 3, 4];
Math.max(...items);


// prefer-template
const name = 'Bob';
const message = `Hello ${name}!`


// rest-spread-spacing
function rest(...args) {}
const spread = { ...object };


// symbol-description
const thing = Symbol('Description');


// template-curly-spacing
const template = `${thing}`;
