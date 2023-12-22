function expensive(){
    console.log("Expensive");
}
// window.addEventListener("resize",expensive);

const throttle = (func,limit)=>{
 let flag=true;
 return function(){
    let context=this,args=arguments;
    if(flag){
        func.apply(context,args);
        flag=false;
        setTimeout(() => {
            flag=true;
        }, limit);
    }
 }
}
const better = throttle(expensive,1000);
window.addEventListener("resize",better);
