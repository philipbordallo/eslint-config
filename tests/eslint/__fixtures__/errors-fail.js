// for-direction
for (let i = 0; i < 10; i--) {
  i;
}

for (let i = 10; i >= 0; i++) {
  i;
}


// getter-return
class GoGetter {
  get name() {}
}


// no-async-promise-executor
let results = new Promise(async (resolve, reject) => {
  resolve(await foo);
});


// no-await-in-loop
async function foo(things) {
  const results = [];

  for (const thing of things) {
    results.push(await bar(thing));
  }
  return baz(results);
}


// no-compare-neg-zero
if (value === -0) {
  // ...
}


// no-cond-assign
if (value = 0) {
  // ...
}


// no-console
console.log('');


// no-constant-condition
if (true) {
  // ...
}


// no-debugger
debugger;


// no-dupe-keys
let duplicates = {
  a: 1,
  a: 2,
};


// no-duplicate-case
switch (true) {
  case 1:
    break;

  case 2:
    break;

  case 1:
    break;

  default:
    break;
}


// no-empty
if (empty) {}
try {

}
catch(error) {}


// no-ex-assign
try {
  // ...
}
catch (error) {
  error = 5;
}


// no-extra-boolean-cast
let extraBoolean = !!!value;
extraBoolean = Boolean(!!value);
if (Boolean(value)) {
  // ...
}


// no-extra-parens
let extraParens = (a || b);
extraParens = value => (value / 5);


// no-extra-semi
let extraSemi = true;;


// no-func-assign
function assignedAction() {}

assignedAction = 5;


// no-inner-declarations
function outer() {
  if (value) {
    function inner() {}
  }
}


// no-invalid-regexp
RegExp('.', 'z')


// no-obj-calls
let math = Math();
let json = JSON();
let reflect = Reflect();


// no-prototype-builtins
const test = {};
let hasBarProperty = test.hasOwnProperty('bar');
let isPrototypeOfBar = test.isPrototypeOf(bar);
let barIsEnumerable = test.propertyIsEnumerable('bar');


// no-regex-spaces
let regex = /foo   bar/;
regex = new RegExp('foo   bar');


// no-sparse-arrays
const sparseArray = [,,];


// no-template-curly-in-string
const notATemplateLiteral = '${value}';


// no-unreachable
function unreachable() {
  return true;

  console.log('text');
}


// no-unsafe-finally
function unsafe() {
  try {
    return 1;
  }
  catch (error) {
    return 2;
  }
  finally {
    return 3;
  }
}


// no-unsafe-negation
if (!key in object) {
  // ...
}


// use-isnan
if (value === NaN) {
  // ...
}
