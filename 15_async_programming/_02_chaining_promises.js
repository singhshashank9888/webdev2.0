const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

// fetchPromise.then((response) => {
//     const jsonPromise=response.json();
//     jsonPromise.then((data)=>{
//         console.log(data[0].name);
//     });
// });

//this calls a function inside a function (call back hell) So we use    CHAINING PROMISES

// fetchPromise
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data[0].name);
//     });

    // Instead of calling the second then() inside the handler for the first then(), we can return the promise returned by json(), and call the second then() on that return value. This is called promise chaining 

fetchPromise
    .then((response)=>{
        if(!response.ok){
            throw new Error(`HTTP ERROR ${response.status}`);
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data[0].name);
    });