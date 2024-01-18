let arr = [2,3,4,5,6];
function double(x){
    return 2*x;
}
function binary(x){
    return x.toString(2);
}
// console.log(double(arr));//NaN
console.log(arr.map(double));
console.log(arr.map(binary));
function greater(x){
    return x>4;
}
console.log(arr.filter(greater));
console.log(arr.reduce(function (max,curr){
    if(curr>max)max=curr;
    return max;
},0));

const user = [
{fname : "varsha", lname : "rani", age : "21"},
{fname : "prachi", lname : "singh", age : "23"},
{fname : "ashish", lname : "singh", age : "20"},
{fname : "sanaya", lname : "raj", age : "21"}
]

const output = user.map((x)=>x.fname+" "+x.lname);
console.log(output);

// 21:2,23:1,21:1
const op = user.reduce(function(acc,curr){
    if(acc[curr.age])
    ++acc[curr.age];
    else
    acc[curr.age]=1;
    return acc;
});
console.log(op);

// fname where age<22
const opt = user.filter(x=>x.age<22).map(x=>x.fname);
console.log(opt);
