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
 

person.newMember=()=>{
    console.log("new");

}
console.log(person.newMember())