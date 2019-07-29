// arrow-body-style
let arrow = () => {
  return 'hello';
}


// arrow-parens
arrow = (value) => value + 1;


// arrow-spacing
arrow =()=> 'hello';


// generator-star-spacing
function * generatorOne(input) {
  yield * input;
}

function *generatorTwo(input) {
  yield *input;
}


// no-confusing-arrow
const confusingArrow = a => a == 0 ? 'yes' : 'no';


// no-const-assign
const constantValue = 0;
constantValue = 1;


// no-dupe-class-members
class Dog {
  bark() {}
  bark() {}
}


// no-new-symbol
const symbol = new Symbol();


// no-this-before-super
class Dalmatian extends Dog {
  constructor() {
    this.hasSpots = true;
    super();
  }
}


// no-useless-computed-key
const computed = {
  [0]: 0,
  ['0']: 0,
};


// no-useless-constructor
class Nobody {
  constructor(props) {}
}


// no-var
var varible = false;


// object-shorthand
const object = {
  action: function() {
    return 'hello';
  },
}


// prefer-arrow-callback
[1, 2, 3].map(function(item) {
  return item + 1;
});


// prefer-const
let notUpdate = true;


// prefer-destructuring
const item = object.item;


// prefer-rest-params
function useArguments() {
  console.log(arguments);
}


// prefer-spread
const items = [1, 2, 3, 4];
Math.max.apply(Math, items);


// prefer-template
const name = 'Bob';
const message = 'Hello ' + name + '!';


// require-yield
function* yieldIt() {
  return 5;
}


// rest-spread-spacing
function rest(... args) {}
const spread = { ... object };


// symbol-description
const thing = Symbol();


// template-curly-spacing
const template = `${ thing }`;
