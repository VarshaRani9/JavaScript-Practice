var arr = [10,20,25,30,11,18,83,29,54];

var maxElement = arr.reduce((max, ele)=>{
    if(ele>max)max=ele;
    return max;
},0);

console.log("Maximum number in array is : ",maxElement);
