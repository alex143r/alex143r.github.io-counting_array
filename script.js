"use strict";

const array = [];
let counter = 0;

stuff();

function stuff() {
  array.unshift(counter);
  if (counter > 9) {
    array.length = 9;
  }
  counter++;
  setTimeout(stuff, 500);

  console.log(array);
}
