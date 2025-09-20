// async function getData(){
//     setTimeout(function(){
//         console.log("O am inside a Timeout block")
//     },3000);
// }

// let output=getData();


//fetch API

async function getData() {
    let reposnse= await fetch('https://jsonplaceholder.typicode.com/posts');
    let data=await reposnse.json();
    console.log(data);
}
getData();
//scenario:
// prepare url / api endpoint ->sync
// fetch data->network call ->async
// process data->sync