function Person(Id, Name, Age, City) {
  this.Id = Id;
  this.Name = Name;
  this.Age = Age;
  this.City = City;
}

function Student(Id, Name, Age, City, Marks, Grade, College) {
  Person.call(this, Id, Name, Age, City);
  this.Marks = Marks;
  this.Grade = Grade;
  this.College = College;
}

function Employee(Id, Name, Age, City, Salary, Bonus, CompanyName) {
  Person.call(this, Id, Name, Age, City);
  this.Salary = Salary;
  this.Bonus = Bonus;
  this.CompanyName = CompanyName;
}

const person = new Person(1, "John Doe", 30, "New York");
const student = new Student(2, "Alice Smith", 20, "Los Angeles", 95, "A", "XYZ College");
const employee = new Employee(3, "Bob Johnson", 35, "San Francisco", 60000, 5000, "ABC Inc.");

console.log(person);
console.log(student);
console.log(employee);
