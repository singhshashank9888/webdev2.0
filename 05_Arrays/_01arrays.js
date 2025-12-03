const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

console.log(sequence)
console.log(random)
console.log(random.length);

random[0] = "meow";
console.log(random);

//2d arrays

console.log(random[0][0])
console.log(random[2][2])

//finding items index

console.log(random.indexOf("meow"));

//adding items in an array at the end
random.push("bhow bhow");
console.log(random);

//adding items at start 
random.unshift("start pe add hogaya ");
console.log(random);

//removing last element
random.pop();
console.log(random);

//to get /remove first element 
console.log(random.shift());
console.log(random);

// splice to remove any element 
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle", "iamverylongcityyyyy", "shrtct"];


//to remove liverpool
const index_liverpl = cities.indexOf("Liverpool");
if (index_liverpl != -1) {
    cities.splice(index_liverpl, 1);
    // In this call to splice(), the first argument says where to start removing items, and the second argument says how many items should be removed.
}
console.log(cities);

//accesing every element using for of loop

for (const city of cities) {
    console.log(city.toUpperCase()); //do not changes the original array
}
console.log(cities);

//map do not changes the original array

const num = [1, 2, 3, 4, 5];
function double(num) {
    return num * 2;
}

const doubled = num.map(double);
console.log(doubled);
console.log(num);//original array remains the sameS

function smallCity(cities) {
    return cities.length > 8;
}
// Sometimes you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter().
const city = cities.filter(smallCity); //here map would have returned only true and falseIf the function returns true, then the item is added to a new array. Finally it returns the new array.
console.log(city);



// converting between strings and data
const cities_data = `"Manc:hester", "Liver:pool", "Edin:burgh", "Carli:sle", "iamverylong:cityyyyy", "shrt:ct"`;


const city_data=cities_data.split(",");

for (const data of city_data) {
    console.log(data.split(":"));
}

// to join again , in join any separator can be used 
const city_data_joined= city_data.join("::");
console.log(city_data_joined);

//to string function.only comma as a separator can be used

console.log(city_data.toString());