// Function Currying using bind method
let multiply = function (x, y) {
    console.log(x * y);
}
// function currying
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// not function currying although we get our result
let multiplyByfour = multiply.bind(this);
multiplyByfour(4, 2);

let multiplyByfive = multiply.bind(this, 5, 4);//x,y
multiplyByfive(5);//this 5 is of no use


// Function Currying using closure method
let multiplyy = function (x) {
    return function (y) {
        console.log(x * y);
    }
}
// function currying
let multiplyyByTwo = multiplyy(2);
multiplyyByTwo(4);
let multiplyyByThree = multiplyy(3);
multiplyyByThree(4);
