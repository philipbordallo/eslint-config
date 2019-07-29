// no-label-var
let label = 2;
label: false;


// no-restricted-globals
let value = 5;

isFinite(value);
isNaN(value);


// no-shadow
let shadow = 2;

function action() {
  let shadow = 5;

  return shadow;
}


// no-shadow-restricted-names
let Infinity = 5;
function NaN() {}


// no-undef
hasNotBeenDefined();


// no-undef-init
let bar = undefined;


// no-undefined
if (bar === undefined) {}


// no-use-before-define
alert(message)
let message = 'hello';
