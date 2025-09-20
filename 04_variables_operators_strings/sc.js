const myInt = 5;
const myFloat = 6.667777;

console.log(myFloat.toFixed(2));
console.log(myInt);


let num = "22";

console.log(Number(num) + 2);


console.log(3 ** 3);

const num1 = 5;
const num2 = '5';

if (num1 == num2) {
    console.log(true);
}
else {
    console.log(false);

}

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

//template literals 
const str = "Hello";
console.log(`${str} hello`);

console.log(`Hi "i am here" ''"so i am jhere" here is tempplate literal sign \`\`iam here\` "`)


const num00 = 90;
const str00 = "10";
// data type conversion
console.log(num00 + Number(str00));
console.log(String(num00) + (str00));

//length and index of 
const browserType = "mozilla";
console.log(browserType.length);
console.log(browserType[0]);

//finding
if (browserType.includes("zila")) {
    console.log("yes");
}
else {
    console.log("no");

}

// start and end with or not 
if (browserType.startsWith("zilla")) {
    console.log("Found zilla!");
} else if (browserType.endsWith("zilla")) {
    console.log("yes zilla here at the end!");
}
else {
    console.log("meow meow")
}


const line = "Heiama word with two word";
//first occc
const firstOcc = line.indexOf("word");
console.log(firstOcc);
//second occ 
const secondOcc = line.indexOf("word", firstOcc + 1);
console.log(secondOcc);

const NoOcc = line.indexOf("wordhero");
console.log(NoOcc);

//slicing 
let strmeow = "HERO 123 HERO 123 HERO 222";
console.log(strmeow.slice(4, 7)) // 4 included 7 not included
console.log(strmeow.slice(4))// 4 included last included 

const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

strmeow = strmeow.replaceAll("HERO", "ZERO");
console.log(strmeow)

