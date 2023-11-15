//  it will fetch data at each keystroke

let counter=0;
const getData=()=>{
// call an API and gets data
console.log("fetching Data..",++counter);
}

// fetching data only when user give a pause in keystroke
const debounce = function(fn,d){
    let timer;
    return function(){
        let context=this,
        args=arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args);
        },d);
    }
}
const betterFun = debounce(getData,300);
