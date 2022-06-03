//FIRST TASK

//1 Create an empty object user.
let user = {};
//2 Add the property name with the value John
//3 Add theproperty surname with the value Smith
//4 Change the value of the name to Pete
//first way
let user2 = {
    name: "John",
    surname: "Smith"
};
user2.name = "Pete";
console.log(user2);
//second way
Object.defineProperty(user2,"name",{
    set function(value){
        this.name = value;
    }
})
user2.name = "marz";
console.log(user2);
//5 Remove the property name from the object 
delete user2.name;
 console.log(user2);



 //SECOND TASK

 //Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

 function isEmpty(obj) {
    for(let key in obj) {
         return false;
     }
     return true;
 }

let object = {
    name: "marz"
};
let object2 = {};
console.log(isEmpty(object)); //False
console.log(isEmpty(object2)); //True



 //THIRD TASK

 //Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

 let salaries = {
     Marz: 2500,
     Aqil: 3000
 }

 function sumAllSalaries(salaries) {
    let total = 0;
     for(let key in salaries){
         total = total + salaries[key];
     }
     return total;
    }
 console.log(sumAllSalaries(salaries)); //5500



  //FOURTH TASK

//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "my menu"
}

function multiplyNumeric(obj){
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] = obj[key] * 2;            
        }
    }
}
multiplyNumeric(menu);
console.log(menu);