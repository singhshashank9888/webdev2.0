const person = {
    //namespace : value,
    name: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
    //this  refers to the object that the method was called on.
    bio() {
        `${this.name[0]} ${this.name[1]} is ${this.age} years old.`;
    },
    introduceSelf() {
        (`Hi i am $ ${this.name[0]}.`);
    },
};

console.log(person.name.first);
console.log(person.name.last);
//bracket notation
console.log(person["name"]["first"]);

//here we cant use dot :>
function logProperty(propertyName) {
    console.log(person[propertyName])
}
logProperty("name");

person.age = 45;
console.log(person["age"]);

person.name.last = "sigggg";
console.log(person.name.last);

person.newMember = () => {
    console.log("IAMNEW");
};
console.log(person.newMember());
//brackets can be used to assign new name member name as well as new value
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

console.log(person["height"]);



//constructors

