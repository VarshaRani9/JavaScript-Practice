// document.querySelector("#category").addEventListener("click",(e)=>{
// //   console.log("category event clicked");//bubbling
// //   console.log(e);
// //   console.log(e.target);
// if(e.target.tagName == 'LI'){
// window.location.href="/"+e.target.id;
// }
// });


document.querySelector("#form").addEventListener('keyup',(e1)=>{
    console.log(e1);
    if(e1.target.dataset.uppercase != undefined){
        e1.target.value=e1.target.value.toUpperCase();
    }
});
