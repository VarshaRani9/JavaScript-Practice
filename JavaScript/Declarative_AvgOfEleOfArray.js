var arr = [10,20,25,30,15];
var sumOfElements = arr.reduce((sum, ele)=>{
    sum+=ele;
    return sum;
},0);
var len = arr.length
var avg = (sumOfElements/len);
console.log("Average of Elements of array is : ",avg);
