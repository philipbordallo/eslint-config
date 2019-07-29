// array-bracket-newline
// array-bracket-spacing
var a = [1,
];
var b = [
  1];
var c = [ 1, 2 ]


// array-element-newline
var a = [
  1, 2,
  3,
];


// block-spacing
function foo() {return true;}
if (foo) { bar = 0;}


// brace-style
if (foo) {
  bar();
} else {
  baz();
}


// camelcase
import { external_module } from 'external-module';

var my_favorite_color = '#112C85';

function do_something() {
  // ...
}

obj.do_something = () => {
  // ...
};

function camelCaseOne({ no_camelcased }) {
  // ...
};

function camelCaseTwo({ isCamelcased: no_camelcased }) {
  // ...
}

function camelCaseThree({ no_camelcased = 'default value' }) {
  // ...
};

var obj = {
  my_pref: 1,
};

var { category_id = 1 } = query;

var { foo: no_camelcased } = bar;

var { foo: bar_baz = 1 } = quz;


// comma-dangle
var commaDangleOne = {
  bar: 'baz',
  qux: 'quux'
};

var commaDangleTwo = { bar: 'baz', qux: 'quux', };

var commaDangleThree = [1, 2, ];

var commaDangleFive = [
  1,
  2
];

foo({
  bar: 'baz',
  qux: 'quux'
});


// comma-spacing
var arr = [1 , 2];
var obj = { foo: 'bar' , baz: 'qur'};
commaSpacing(a ,b);
new Foo(a ,b);
function commaSpacingFunc(a ,b) {}


// comma-style
function commaStyle() {
  return {
    a: 1
    , b: 2,
  };
}


// computed-property-spacing
obj[foo ];
obj[ 'foo'];
var x = { [ b ]: a };
obj[foo[ bar ]];

// func-call-spacing
fn ();

fn
();

// func-names
Foo.prototype.bar = function() {};

// function-paren-newline
function parenNewLineOne(bar,
  baz,
) {}

var parenNewLineTwo = function(bar,
  baz,
) {};

var parenNewLineThree = (
  bar,
  baz) => {};

parenNewLineFour(
  bar,
  baz);

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

function fooTwo(bar,
  baz,
  qux) {
    qux();
}

var fooThree = function fooThree(bar,
  baz,
  qux) {
    qux();
};

foo(bar,
    baz,
      qux,
);

var fooArray = [
    bar,
baz,
      qux,
];

var fooObject = {
    bar: 1,
baz: 2,
      qux: 3,
};

const hofOne = () =>
dispatch => {

};

const ternary =
  foo ? bar :
  baz;


// key-spacing
const keySpacing = {key:'value'};
const keySpacingTwo = {
  longerKey: 'value',
  key:       'value',
};


// keyword-spacing
if (condition) {}else if (otherCondition) {}else {}


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
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
*/


// max-params
function maxParams(one, two, three, four) {
  // ...
}


// new-cap
const fido = new dog();


// new-parens
const clifford = new (Dog);
const santasLittleHelper = new Dog;


// newline-per-chained-call
first.second().third().final();


// no-array-constructor
const array = new Array();


// no-bitwise
let bitwise = y | z;
bitwise = y & z;
bitwise = y ^ z;

bitwise = ~ z;

bitwise = y << z;
bitwise = y >> z;
bitwise = y >>> z;
bitwise |= y;
bitwise &= y;
bitwise ^= y;
bitwise <<= y;
bitwise >>= y;
bitwise >>>= y;


// no-continue
for (let i = 0; i < 10; i++) {
  if (i >= 5) {
    continue;
  }

  a += i;
}


// no-lonely-if
if (condition) {
  // ...
}
else {
  if (anotherCondition) {
    // ...
  }
}

if (condition) {
  // ...
}
else {
  if (anotherCondition) {
    // ...
  }
  else {
    // ...
  }
}


// no-mixed-operators
let mixedOperators = a && b < 0 || c > 0 || d + 1 === 0;
mixedOperators = a + b * c;

mixedOperators = a % b ** c;
mixedOperators = a % b + c;
mixedOperators = a % b - c;
mixedOperators = a % b * c;
mixedOperators = a % b / c;
mixedOperators = a ** b + c;
mixedOperators = a ** b - c;
mixedOperators = a ** b * c;
mixedOperators = a ** b / c;
mixedOperators = a && b || c;


// no-multi-assign
const multiAssignOne = multiAssignTwo = multiAssignThree;




// no-multiple-empty-lines


// no-nested-ternary
let nestedTernary = foo ? bar : baz === qux ? quxx : foobar;


// no-new-object
let object = new Object();


// no-plusplus
let number = 0;
number++;
number--;


// no-restricted-syntax
for (let enumerable in object) {
  enumerable;
}

for (let item of iterable) {
  item;
}

labelOne: true;


// no-underscore-dangle
const _underscoreDangle = true;


// no-unneeded-ternary
let unneededTernary = x === 2 ? true : false;
unneededTernary = x ? true : false;
unneededTernary = f(x ? x : 1);


// no-whitespace-before-property
foo [bar];
foo. bar;
foo .bar;
foo. bar. baz;
foo. bar()
  .baz();
foo
  .bar(). baz();


// nonblock-statement-body-position
if (foo)
  bar();
else
  baz();


// object-curly-newline
const coolObject = { one: 1, two: 2, three: 3, four: 4 };

// object-curly-spacing
coolObject = {one: 1, two: 2, three: 3, four: 4};


// one-var
const itemOne = 1,
  itemTwo = 2;

// one-var-declaration-per-line
let itemThree = 3, itemFour = 4;


// operator-assignment
let value = 0;
value = value + y;


// operator-linebreak
value = 5 +
  5;

if (
  condition ||
  anotherCondition
) {
  // ...
}


// padded-blocks
if (true) {

  value = 5;

}

class PaddedBlock {

  test() {}

}


switch (value) {

  case value === 0:
    break;

}


// prefer-object-spread
const newObject = Object.assign({}, object);


// quote-props
let quoteProps = {
  one: 1,
  two: 2,
  'three-test': 3,
};


// quotes
const correctQuote = "string";


// semi
let semicolon = true
semicolon = false ;
semicolon = 'On the next line'
;


// space-before-blocks
if (condition){}


// space-before-function-paren
function definedFunction () {}
const anonymousFunction = function () {};
const asyncArrowFunction = async() =>{};


// space-in-parens
foo( 'space' );


// space-infix-ops
a+b;
a?b:c;


// space-unary-ops
delete(foo.bar);
fooObject = new[Foo]();

function *genFoo() {
  yield(0);
}

async function asyncFoo() {
  await(bar);
}


// spaced-comment
//Comment test 1
/*Comment test 2*/


// switch-colon-spacing
switch (value) {
  case value === 0 :
    break;
}

// template-tag-spacing
func `Hello world`;
