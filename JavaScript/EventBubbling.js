//  BUBBLING :
// document.querySelector("#grandParent").addEventListener('click',()=>{
//     console.log("GrandParent Clicked!!");
// });
// document.querySelector("#parent").addEventListener('click',()=>{
//     console.log("Parent Clicked!!");
// });
// document.querySelector("#child").addEventListener('click',()=>{
//     console.log("Child Clicked!!");
// });

var elems = document.querySelectorAll("#grandParent,#parent,#child");
 for(let elem of elems) {
 elem.addEventListener("click", ()=>{
    alert('Bubbling: ' + elem.id + ' clicked')
 });
}
