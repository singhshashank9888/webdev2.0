function outerFunction() {
    let name = "Shashank";
    function innerFunction() {
        console.log(name);
    }
    return innerFunction;
}
let output = outerFunction();
output ();

