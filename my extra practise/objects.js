//Create a Person contructor.
function Person(firstname,lastname,age){
    this.firstname = firstname,
    this.lastname = lastname,
    this.age = age
};

Person.prototype.introduce = function(){
    console.log(`hello my name is ${this.firstname} ${this.lastname}`);
}

//inherit Student's prototype from Person.
function Student(firstname,lastname,age,number){
    Person.call(this,firstname,lastname,age);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.study = function(){
    console.log(`my student number is ${this.number}. I have already studied hard`);
}

let marz = new Person("marz","saint",18);
// marz.introduce();
let marz1 = new Student("yehu","saint",18,11);
// marz1.introduce();
// console.log(marz1);
// marz1.study();

//inherit Teacher's prototype from Person.
function Teacher(firstname,lastname,age,branch){
    Person.call(this,firstname,lastname,age);
    this.branch = branch;
};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function () {
    console.log(`I teach ${this.branch}`);
};

let nati = new Teacher("natavan","saint",18,"Fizika");
// nati.introduce();
// nati.teach();
// console.log(nati);

//inherit Headmaster's prototype from Teacher.

function Headmaster(firstname, lastname, age, branch){
    Teacher.call(this,firstname,lastname,age,branch);
}

Headmaster.prototype = Object.create(Teacher.prototype);

Headmaster.prototype.constructor = Headmaster;

Headmaster.prototype.shareTask = function(){
    console.log("I have already shared all the work");
}

let drektor = new Headmaster("arzu","miriyev",18,"bio");
// console.log(drektor);
// drektor.shareTask();
// drektor.introduce();
// drektor.teach();
