// array-callback-return
const newArray = [1, 2, 3].map(number => number + 1);

console.log(newArray);

// block-scoped-var
function blockScopedVar() {
  var build;

  if (true) {
    build = true;
  }

  console.log(build);
}

blockScopedVar();

// class-methods-use-this
class Car {
  static honk() {
    console.log('Beep!');
  }
}

Car.honk();

// consistent-return
function doSomething(condition) {
  if (condition) {
    return true;
  }

  return false;
}

// curly
if (foo) foo++; else doSomething();

if (foo) foo++;
else if (bar) baz()
else doSomething();

do something();
while (foo);

while (foo
  && bar) baz();

if (foo) {
  foo++;
}

if (foo) { foo++; }

while (true) {
  doSomething();
  doSomethingElse();
}

// default-case
switch (a) {
  case 1:
    /* code */
    break;

  default:
    /* code */
    break;
}


switch (a) {
  case 1:
    /* code */
    break;

  // no default
}

switch (a) {
  case 1:
    /* code */
    break;

  // No default
}

// dot-notation
let x = foo.bar;

let y = foo[bar];

// dot-location
let dotFoo = object
.property;
let dotBar = object.property;

// eqeqeq
if (
  a === b ||
  foo === true ||
  bananas !== 1 ||
  value === undefined ||
  typeof foo === 'undefined' ||
  'hello' !== 'world' ||
  foo === null
) {
  console.log('It’s all true');
}

// guard-for-in
for (key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}

for (key in foo) {
  if ({}.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}

// no-caller
function fooCaller(n) {
  if (n <= 0) {
    return;
  }

  foo(n - 1);
}

[1,2,3,4,5].map(function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
});


// no-case-declarations
const caseA = 0;

switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  default: {
    function f() {}
    break;
  }
}

// no-else-return
function fooReturn() {
  if (error) {
    return 'It failed';
  }

  if (loading) {
    return `It's still loading`;
  }

  return null;
}

// no-empty-function
function fooEmpty() {}

let fooEmptyArrow = () => {};

let objEmpty = {
  fooEmpty: function() {},

  fooEmpty() {},
};

// no-empty-pattern
let {emptyValue = {}} = foo;
let {emptyValueTwo = []} = foo;
function fooEmptyPattern({a = {}}) {}
function fooEmptyPatternTwo({a = []}) {}

// no-extra-bind
let bindActionOne = function () {
  this.foo();
}.bind(bar);

let bindActionTwo = function (a) {
  return a + 1;
}.bind(foo, bar);

// no-fallthrough
function fallthrough(foo) {
  switch(foo) {
      case 1:
        return foo;

      case 2:
        return foo;

      default:
        return foo;
  }
}

// no-floating-decimal
let pointFice = 0.5;
let twoPoint = 2.0;
let negativePointSeven = -0.7;

// no-implicit-coercion
let boolCoercedOne = Boolean(foo);
let numberCoercedOne = Number(foo);
let stringCoercedOne = String(foo);


// no-lone-blocks
{
  let x = 1;
}

// no-loop-func
// no-unmodified-loop-condition
for (let i=10; i; i--) {
  let a = function() { return i; };
  a();
}

let modifiedItem = 100;
for (let i=10; i; i--) {
  let a = function() { return modifiedItem; };
  a();
}

// no-multi-spaces
const tooManySpaces = 1;


// no-multi-str
const multLineString = `Here is a
multi-line string`;

// no-new
const thing = new Thing();

// no-param-reassign
function reassignOne(bar) {
  let barOne = bar;
}

// no-proto
Object.setPrototypeOf(obj, b);

// no-return-assign
function returnAssignment() {
  return foo === bar + 2;
}

// no-return-await
async function asyncAction() {
  const value = await anotherAsyncAction();
  return value;
}

// no-throw-literal
throw new Error();
throw new Error('error');
let error = new Error('error');
throw error;

// no-useless-escape
let usefulEscape = "\"";
usefulEscape = '\'';
usefulEscape = "\x12";
usefulEscape = "\u00a9";
usefulEscape = "xs\u2111";
usefulEscape = `\``;
usefulEscape = `\${${foo}}`;
usefulEscape = `$\{${foo}}`;
usefulEscape = /\\/g;
usefulEscape = /\t/g;
usefulEscape = /\w\$\*\^\./;

// prefer-promise-reject-errors
Promise.reject(new Error('blah'));

const promise = new Promise(function(resolve, reject) {
  reject(new Error('blah'));
});

let parseNumber = parseInt('071', 10);
parseNumber = parseInt('071', 8);
parseNumber = parseFloat(someValue);

// wrap-iife
(function() {})();

// yoda
if (flag === true) {
  doSomething();
}
