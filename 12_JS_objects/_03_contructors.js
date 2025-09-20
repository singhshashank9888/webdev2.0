// function createPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.introduceSelf =function() {
//         console.log(`my name is ${this.name}`);
//     }
//     return obj;
// }
// const myObj=createPerson("myPerson");

// myObj.introduceSelf();

//using contructors
function Person(name){
    this.name=name;
    this.introduceSelf=function(){
        console.log(`i am ${this.name}`);
    };
}

const myObj1=new Person("MyNewPerson");
myObj1.introduceSelf();