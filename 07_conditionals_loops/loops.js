const cats = ["Leoparddddd", "Servallll", "Jaguar", "Tiger", "Caracal", "Lion"];

let myFavCats="My fav cats  are";
for (const cat of cats) {
    myFavCats+= `${cat}, `;
}
console.log(myFavCats);
function upCase(str){
    return str.toUpperCase();
}
//map
const CATS=cats.map(upCase);
console.log(CATS);
//filter
function big(str) {
    return (str.length>8);
}

const BigCat=cats.filter(big);
console.log(BigCat);

//handling for loop smartly
let myNewFavCat="My new fav cats  are ";
for( i = 0 ; i<cats.length;i++){
    if(i===cats.length-1){
        myNewFavCat+=`and ${cats[i]}`;
    }
    else{
        myNewFavCat+=`${cats[i]}, `;
        
    }
}
console.log(myNewFavCat);