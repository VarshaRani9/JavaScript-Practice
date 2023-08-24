var arr = [10,20,25,30,15];
var sumOfElements = arr.reduce((sum, ele)=>{
    sum+=ele;
    return sum;
},0);
console.log("Sum of Elements of array is : ",sumOfElements);
