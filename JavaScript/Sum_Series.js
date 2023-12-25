// sum of 2 number
function sum2(a){
    return function(b){
        return a+b;
    }
}
console.log(sum2(1)(2));


// sum of 3 number
function sum3(a){
    return function(b){
        return function(c){
             return a+b+c;
        }
    }
}
console.log(sum3(1)(2)(3));

// sum of n numbers
function sum(a){
    return function(b){
        if(b)
        return sum(a+b);
    return a;
}
}
console.log(sum(1)(2)(3)(4)());


let summ=function(a){
    return function(b){
        return b?summ(a+b):a;
    }
}
console.log(summ(1)(2)(3)(4)());
console.log(summ(3)(4)(11)(6)());


// According to ES6
let summm=(a)=> (b)=>b?sum(a+b):a;
console.log(summm(1)(2)(3)(4)());
console.log(summm(3)(4)(11)(6)());
