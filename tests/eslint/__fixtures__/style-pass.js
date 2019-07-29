// array-bracket-newline
// array-bracket-spacing
var a = [];
var b = [
];
var c = [1, 2];
var d = [
  1,
];

// array-element-newline
var a = [
  1,
  2,
  3,
];

// block-spacing
function foo() { return true; }
if (foo) { bar = 0; }

// brace-style
if (foo) {
  bar();
}
else {
  baz();
}


// camelcase
import { no_camelcased as camelCased } from 'external-module';

var myFavoriteColor = '#112C85';
var MY_FAVORITE_COLOR = '#112C85';
let camelTest = bar.baz_boom;
camelTest = { qux: bar.baz_boom };

obj.do_something();
do_something();

var { category_id: category } = query;

function camelCaseOne({ isCamelCased }) {
  // ...
};

function camelCaseTwo({ isCamelCased: isAlsoCamelCased }) {
  // ...
}

function camelCaseThree({ isCamelCased = 'default value' }) {
  // ...
};

var { categoryId = 1 } = query;

var { foo: isCamelCasedBar } = bar;

var { foo: isCamelCasedQuz = 1 } = quz;


// comma-dangle
var commaDangleOne = {
  bar: 'baz',
  qux: 'quux',
};

var commaDangleTwo = { bar: 'baz', qux: 'quux' };
var commaDangleThree = [1, 2];

var commaDangleFive = [
  1,
  2,
];

foo({
  bar: 'baz',
  qux: 'quux',
});


// comma-spacing
var arr = [1, 2];
var obj = { foo: 'bar', baz: 'qur' };
commaSpacing(a, b);
new Foo(a, b);
function commaSpacingFunc(a, b) {}


// comma-style
function commaStyle() {
  return {
    a: 1,
    b: 2,
  };
}


// computed-property-spacing
obj[foo];
obj['foo'];
var x = { [b]: a };
obj[foo[bar]];


// consistent-this
var that = 42;
var self = this;
that = 42;
self = this;


// func-call-spacing
fn();

fn();


// func-name-matching
var match = function doesNotMatch() {};
match = function doesNotMatch() {};
obj.match = function doesNotMatch() {};
obj['match'] = function doesNotMatch() {};
var obj = { match: function doesNotMatch() {} };
({ ['match']: function doesNotMatch() {} });


// func-names
Foo.prototype.bar = function bar() {};


// function-paren-newline
function parenNewLineOne(
  bar,
  baz,
) {}

var parenNewLineTwo = function(bar, baz) {};

var parenNewLineThree = (
  bar, baz,
) => {};

parenNewLineFour(bar, baz);


// id-blacklist
var data = {};

function callback() {
  // ...
}

element.callback = function callback() {
  // ...
};

var itemSet = {
  data: [...data],
};


// implicit-arrow-linebreak
(foo) =>
  bar;

(foo) =>
  (bar);

(foo) =>
  bar =>
    baz;

(foo) => (
  bar()
);

// indent
switch (a) {
  case 'a':
    break;
  case 'b':
    break;
}

if (y) {
  console.log('foo');
}

foo
  .bar
  .baz();

function fooTwo(bar, baz, qux) {
  qux();
}

var fooThree = function fooThree(
  bar,
  baz,
  qux,
) {
  qux();
};

foo(
  bar,
  baz,
  qux,
);

let fooArray = [
  bar,
  baz,
  qux,
];

let fooObject = {
  bar: 1,
  baz: 2,
  qux: 3,
};

const hofOne = () =>
  dispatch => {

  };

const hofTwo = () => dispatch => {
// Comment
};

const ternary = foo
  ? bar
  : baz;


// key-spacing
const keySpacing = { key: 'value' };
const keySpacingTwo = {
  longerKey: 'value',
  key: 'value',
};


// keyword-spacing
if (condition) {

}
else if (otherCondition) {

}
else {

}


// line-comment-position
foo(); // Comment


// lines-between-class-members
class Dog {
  jump() {
    // ...
  }

  bark() {
    // ...
  }

  run() {}

  scratch() {}
}


// max-len
/*
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
*/
const veryLongURL = 'http://google.com/thisisaverylongurlthatshoudlworkandnotthrowanerrorokayyesthisworks';
const veryLongString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const veryLongTemplateLiteral =  `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ${foo()} sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;


// max-params
function maxParams(one, two, three) {
  // ...
}


// multiline-ternary
const ternaryOne = condition ? 'yes' : 'no';
const ternaryTwo = condition
  ? 'yes'
  : 'no';


// new-cap
const fido = new Dog();


// newline-per-chained-call
first
  .second()
  .third()
  .final();


// no-array-constructor
const array = [];


// no-bitwise
let conditional = y || z;
conditional = y && z;
conditional = y > z;
conditional = y < z;
conditional += y;


// no-inline-comments
const inlineComments = true; // Example of an inline comment


// no-lonely-if
if (condition) {
  // ...
}
else if (anotherCondition) {
  // ...
}

if (condition) {
  // ...
}
else if (anotherCondition) {
  // ...
}
else {
  // ...
}


// no-mixed-operators
let mixedOperators = a || b || c;
mixedOperators = a && b && c;
mixedOperators = (a && b < 0) || c > 0 || d + 1 === 0;
mixedOperators = a && (b < 0 || c > 0 || d + 1 === 0);
mixedOperators = a + (b * c);
mixedOperators = (a + b) * c;

mixedOperators = (a % b) ** c;
mixedOperators = (a % b) + c;
mixedOperators = (a % b) - c;
mixedOperators = (a % b) * c;
mixedOperators = (a % b) / c;
mixedOperators = (a ** b) + c;
mixedOperators = (a ** b) - c;
mixedOperators = (a ** b) * c;
mixedOperators = (a ** b) / c;
mixedOperators = (a && b) || c;


// no-negated-condition
if (!conditional) {
  // ...
}
else {
  // ...
}


// no-plusplus
let number = 0;
number += 1;
number -= 1;


// nonblock-statement-body-position
if (foo) bar();
else baz();


// object-curly-newline
// object-curly-spacing
let coolObject = { one: 1, two: 2, three: 3 };
coolObject = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};


// operator-assignment
let value = 0;
value += y;

// operator-linebreak
value = 1 + 2;
value = 5
      + 5;

if (
  condition
  || anotherCondition
) {
  // ...
}


// prefer-object-spread
const newObject = { ...object };


// quote-props
let quoteProps = {
  'one': 1,
  'two': 2,
  'three-test': 3,
};

quoteProps = {
  one: 1,
  two: 2,
  three: 3,
};


// quotes
const correctQuote = 'string';


// semi
const semicolon = true;


// sort-keys
const sortedKeys = {
  a: 1,
  c: 1,
  b: 1,
};


// space-before-function-paren
function definedFunction() {}
const anonymousFunction = function() {};
const asyncArrowFunction = async () => {};


// space-in-parens
foo('space');


// space-infix-ops
a + b;
a ? b : c;


// space-unary-ops
delete foo.bar;
fooObject = new Foo();
void 0;

function *genFoo() {
  yield (0);
}

async function asyncFoo() {
  await (bar);
}


// spaced-comment
// Comment test 1
/* Comment test 2 */


// switch-colon-spacing
switch (value) {
  case value === 0:
    break;
}


// template-tag-spacing
func`Hello world`;
