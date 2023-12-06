// 1st  Example - 
let name = {
    firstname:"varsha",
    lastname : "Rani",
    printfullname : function (){
        console.log(this.firstname+" "+this.lastname);
    }
}
name.printfullname();

let name3 = {
    firstname:"prachi",
    lastname : "singh", 
}
// function burrowing : using call method
name.printfullname.call(name3);

// 2nd Example -
let name1 = {
    firstname:"varsha",
    lastname : "Rani",
}
let printfullname1 = function (){
    console.log(this.firstname+" "+this.lastname);
}
printfullname1.call(name1);
printfullname1.call(name3);

//  3rd Example -
let printfullname2 = function (hometown){
    console.log(this.firstname+" "+this.lastname+" "+hometown);
}
printfullname2.call(name1,"DDN");
printfullname2.call(name3,"MUZ");

// 4th Example
let printfullname3 = function (hometown,state){
    console.log(this.firstname+" "+this.lastname+" "+hometown+" "+state);
}
printfullname3.call(name1,"DDN","UK");
printfullname3.call(name3,"MUZ","BHR");


// APPLY :
printfullname3.apply(name1,["Mumbai","Maharastra"]);


//  BIND :
let printMyName=printfullname3.bind(name3,"Mumbai","Maharastra");
console.log(printMyName);
printMyName();
