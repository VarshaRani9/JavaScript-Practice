function Student(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
    this.phyMarks = phyMarks;
    this.chemMarks = chemMarks;
    this.mathMarks = mathMarks;
}
Student.prototype.total = function(){
    return this.phyMarks+this.chemMarks+this.mathMarks;
}
Student.prototype.grade = function () {
    let grd;
    if(this.total()>90)grd = 'A';
    else if(this.total()>80)grd = 'B';
    else grd = 'C';
    return grd;
}

var varsha = new Student(101, 'Varsha', 21, 90, 95, 91);
console.log(varsha)
console.log("varsha.total() :",varsha.total());
console.log("varsha.grade() :",varsha.grade());
console.log("varsha.__proto__.total.call(varsha) :",varsha.__proto__.total.call(varsha));
console.log("varsha.__proto__.grade.call(varsha) :",varsha.__proto__.grade.call(varsha));
console.log("varsha instanceof Student : ", varsha instanceof Student);
console.log("varsha instanceof Object : ", varsha instanceof Object);

var ashish = new Student(101, 'Ashish', 20, 96, 98, 78);
console.log(ashish)
console.log("ashish.total() :",ashish.total());
console.log("ashish.grade() :",ashish.grade());
console.log("ashish.__proto__.total.call(ashish) :",varsha.__proto__.total.call(ashish));
console.log("ashish.__proto__.grade.call(ashish) :",varsha.__proto__.grade.call(ashish));
console.log("ashish instanceof Student : ", ashish instanceof Student);
console.log("ashish instanceof Object : ", ashish instanceof Object);
