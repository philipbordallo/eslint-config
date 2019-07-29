// for-direction
for (let i = 0; i < 10; i++) {
  i;
}

// getter-return
class GoGetter {
  get name() {
    return 'Bob';
  }
}

// no-async-promise-executor
let results = Promise.resolve(foo);


// no-await-in-loop
async function looper(things) {
  const results = [];

  for (const thing of things) {
    results.push(bar(thing));
  }

  return baz(await Promise.all(results));
}


// no-extra-parens
let extraParens = a || b;
extraParens = value => value / 5;

const returnObject = obj => ({ ...obj });


// no-inner-declarations
function outer() {
  function inner() {}
}


// no-prototype-builtins
const test = {};
let hasBarProperty = Object.prototype.hasOwnProperty.call(test, 'bar');
let isPrototypeOfBar = Object.prototype.isPrototypeOf.call(test, bar);
let barIsEnumerable = {}.propertyIsEnumerable.call(test, 'bar');


// use-isnan
if (Number.isNaN(value)) {
  // ...
}
