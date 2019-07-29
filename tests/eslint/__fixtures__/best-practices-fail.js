// array-callback-return
const newArray = [1, 2, 3].map(number => {
  if (number < 2) {
    return number;
  }
  else {
    return number + 1;
  }
});

// block-scoped-var
function blockScopedVar() {
  if (true) {
    var build = true;
  }

  console.log(build);
}

// class-methods-use-this
class Car {
  honk() {
    console.log('Beep!');
  }
}

// consistent-return
function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    return;
  }
}

// curly
if (foo)
  doSomething();
else
  doSomethingElse();

if (foo) foo(
  bar,
  baz);

// default-case
switch (a) {
  case 1:
    /* code */
    break;
}

// dot-notation
let y = foo['class'];

// dot-location
let dotFoo = object.
property;

// eqeqeq
if (
  a == b ||
  foo == true ||
  bananas != 1 ||
  value == undefined ||
  typeof foo == 'undefined' ||
  'hello' != 'world' ||
  foo == null
) {
  console.log('It’s all true');
}

// guard-for-in
for (key in foo) {
  doSomething(key);
}

// max-classes-per-file
class AnotherClass {}

// no-alert
alert('here!');

confirm('Are you sure?');

prompt(`What's your name?`, 'John Doe');

// no-caller
function fooCaller(n) {
  if (n <= 0) {
    return;
  }

  arguments.callee(n - 1);
}

[1,2,3,4,5].map(function(n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});

// no-case-declarations
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {}
    break;
  default:
    class C {}
}

// no-else-return
function fooReturn() {
  if (error) {
      return 'It failed';
  } else if (loading) {
      return `It's still loading`;
  }
}

// no-empty-function
function fooEmpty() {}

let fooEmptyOther = function() {};

let fooEmptyArrow = () => {};

function* fooEmptyGen() {}

let fooEmptyGenOther = function*() {};

let objEmpty = {
  fooEmpty: function() {},

  fooEmpty: function*() {},

  fooEmpty() {},

  *fooEmpty() {},

  get fooEmpty() {},

  set fooEmpty(value) {}
};

// no-empty-pattern
let {} = foo;
let [] = foo;
let {a: {}} = foo;
let {a: []} = foo;
function fooEmptyPattern({}) {}
function fooEmptyPatternTwo([]) {}
function fooEmptyPatternThree({a: {}}) {}
function fooEmptyPatternFour({a: []}) {}

// no-eval
eval('1 + 1');

// no-extend-native
Object.prototype.a = 'a';

// no-extra-bind
let bindActionOne = function () {
    foo();
}.bind(bar);

let bindActionTwo = (() => {
    foo();
}).bind(bar);

let bindActionThree = (() => {
    this.foo();
}).bind(bar);

let bindActionFour = function () {
    (function () { this.foo(); })();
}.bind(bar);

let bindActionFive = function () {
    function foo() {
      this.bar();
    }
}.bind(baz);

// no-extra-label
// no-labels
// no-unused-labels
A: while (a) {
  break A;
}

B: for (let i = 0; i < 10; ++i) {
  break B;
}

C: switch (a) {
  case 0:
    break C;
  default:
    break;
}

// no-fallthrough
function noFallthrough() {
  switch(item) {
    case 1:

    case 2:

    default:
  }
}

// no-floating-decimal
let pointFice = .5;
let twoPoint = 2.;
let negativePointSeven = -.7;

// no-global-assign
window = {};
length = 1;
top = 1;

// no-implicit-coercion
let boolCoercedOne = !!foo;
let boolCoercedTwo = ~foo.indexOf(".");
let numberCoercedOne = +foo;
let numberCoercedTwo = 1 * foo;

let stringCoercedOne = "" + foo;
let stringCoercedTwo = `` + foo;
foo += "";
foo += ``;

// no-implied-eval
setTimeout(`alert('Hi!');`, 100);
setInterval(`alert('Hi!');`, 100);
execScript(`alert('Hi!')`);
window.setTimeout(`count = 5`, 10);
window.setInterval(`foo = bar`, 10);

// no-iterator
Foo.prototype.__iterator__ = function() {
    return new FooIterator(this);
};
foo.__iterator__ = function () {};

// no-lone-blocks
{}
{
  function loner() {}
}

// no-loop-func
// no-unmodified-loop-condition
do {
  function a() { return i; };
  a();
} while (i);

let modifiedItem = 0;
for (let i = 0; i < 10; ++i) {
    setTimeout(() => console.log(modifiedItem));
    modifiedItem += 1;
}

// no-multi-spaces
const tooManySpaces     = 1;

// no-multi-str
const multLineString = 'Here is a \
multi-line string';

// no-new
new Thing();

// no-new-func
const coolFunction = new Function();

// no-new-wrappers
let stringObject = new String;
let numberObject = new Number;
let booleanObject = new Boolean;

// no octal
let octal = 071;
let octalCombo = 5 + 07;

// no-octal-escape
const octalEscape = 'Copyright \251';

// no-param-reassign
function reassignOne(bar) {
  bar = 13;
}

function reassignTwo(bar) {
  bar++;
}

// no-proto
obj.__proto__ = b;

// no-restricted-properties
window.isFinite();
window.isNaN();

obj.__defineGetter__();
obj.__defineSetter__();

Math.pow();

// no-return-assign
function returnAssignmentOne() {
  return foo = bar + 2;
}

function returnAssignmentTwo() {
  return foo += 2;
}

function returnAssignmentThree() {
    return (foo = bar + 2);
}

// no-return-await
async function asyncAction() {
    return await anotherAsyncAction();
}

// no-script-url
location.href = 'javascript:void(0)';

// no-self-assign
foo = foo;

[a, b] = [a, b];

[a, ...b] = [x, ...b];

({a, b} = {a, x});

// no-self-compare
let compareValue = 10;
if (compareValue === compareValue) {
  compareValue = 20;
}

// no-sequences
if (doSomething(), Boolean(test));

// no-throw-literal
throw error;
throw 0;
throw undefined;
throw null;

// no-unused-expressions
0
if(0) 0
a && b()

// no-useless-concat
const together = `to` + `gether`;

// no-useless-escape
let uselessEscape = "\'";
uselessEscape = '\"';
uselessEscape = "\#";
uselessEscape = "\e";
uselessEscape = `\"`;
uselessEscape = `\"${foo}\"`;
uselessEscape = `\#{foo}`;
uselessEscape = /\!/;
uselessEscape = /\@/;

// no-useless-return
function uselessReturnOne() { return; }

function uselessReturnTwo() {
  doSomething();
  return;
}

// no-void
void foo;

// no-warning-comments
// TODO:
// FIXME:
// FIX:
// XXX:

// no-with
with (point) {
  r = Math.sqrt(x * x + y * y);
}

// prefer-promise-reject-errors
Promise.reject('blah');

const promise = new Promise(function(resolve, reject) {
  reject('');
});

// radix
let numberParsed = parseInt('071');
numberParsed = parseInt(someValue);
numberParsed = parseInt('071', 'abc');
numberParsed = parseInt();

// vars-on-top
var onTop = 'At the top!';

// wrap-iife
(function() {} ());

// yoda
if (true === flag) {
  doSomething()
}
