function Student(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
    this.phyMarks = phyMarks;
    this.chemMarks = chemMarks;
    this.mathMarks = mathMarks;
    this.total = function(){
        return this.phyMarks+this.chemMarks+this.mathMarks;
    }
    this.grade = function () {
        let grd;
        if(this.total()>90)grd = 'A';
        else if(this.total()>80)grd = 'B';
        else grd = 'C';
        return grd;
    }
}

var varsha = new Student(101, 'Varsha', 21, 90, 95, 91);
console.log(varsha)
console.log(varsha.total());
console.log(varsha.grade());
console.log("varsha instanceof Student : ", varsha instanceof Student);
console.log("varsha instanceof Object : ", varsha instanceof Object);

var prachi = new Student(101, 'Prachi', 23, 76, 93, 85);
console.log(prachi)
console.log(prachi.total());
console.log(prachi.grade());
console.log("prachi instanceof Student : ", prachi instanceof Student);
console.log("prachi instanceof Object : ", prachi instanceof Object);

var ashish = new Student(101, 'Ashish', 20, 96, 98, 78);
console.log(ashish)
console.log(ashish.total());
console.log(ashish.grade());
console.log("ashish instanceof Student : ", ashish instanceof Student);
console.log("ashish instanceof Object : ", ashish instanceof Object);
