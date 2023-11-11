//  CAPTURING :
// document.querySelector("#grandParent").addEventListener('click',()=>{
//     console.log("GrandParent Clicked!!");
// },true);
// document.querySelector("#parent").addEventListener('click',()=>{
//     console.log("Parent Clicked!!");
// },true);
// document.querySelector("#child").addEventListener('click',()=>{
//     console.log("Child Clicked!!");
// },true);

var elems = document.querySelectorAll("#grandParent,#parent,#child");
 for(let elem of elems) {
 elem.addEventListener("click", ()=>{
    console.log(elem.id+" clicked");
 }, true);
}
