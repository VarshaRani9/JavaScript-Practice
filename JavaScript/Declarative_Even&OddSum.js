var arr = [10,20,25,30,15];
var evenSum = arr.reduce((sum, ele)=>{
    if(ele%2==0)
    sum+=ele;
    return sum;
},0);
var oddSum = arr.reduce((sum, ele)=>{
    if(ele%2!=0)
    sum+=ele;
    return sum;
},0);

console.log("Sum of Even elements of array is : ",evenSum);
console.log("Sum of Odd elements of array is : ",oddSum);
