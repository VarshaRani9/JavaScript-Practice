"use strict";

// this in global space
console.log(this); // global Object

// this inside a function
function x() {
  // the value depends on strict / non strict mode
  console.log(this);
}
x(); // undefined
// window.x(); // window

// this inside a object's method
const student = {
  name: "Varsha",
  printName: function() {
    console.log(this.name);
  },
};
student.printName(); // value of this - student i.e Varsha
const student2 = {
  name: "Rani",
};
// call apply bind methods (sharing methods)
student.printName.call(student2); // value of this - student2 i.e Rani

// this inside arrow function
const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj.x(); // global object

// this inside nested arrow function
const obj2 = {
  a: 20,
  x: function() {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj2.x(); // obj2 - {a: 20, x: ƒ}
