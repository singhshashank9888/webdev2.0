// const firstPromise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve(10);
//     } else {
//         reject(-1);
//     }
// });

// firstPromise.then((response) => {
//     console.log("Message from then " + response);
//     return 20;
// })
//     .then((response) => {
//         console.log("Message2 from then " + response);
//         return 30;
//     })
//     .then((response) => {
//         console.log("Message3 from then " + response);
//     })
//     .catch((error) => {
//         console.log("Error: " + error);
//     })
//     .finally(()=>{
//         console.log("I will run anyway");
//     })

let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
});
let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
});
let promise3=new Promise((resolve,reject)=>{
    setTimeout(reject,4000,"Third"); //resolve/reject
});

// Promise.any([promise1,promise2,promise3])
Promise.all([promise1,promise2,promise3])
.then((value)=>{
    console.log(value);
})
.catch((error)=>
console.error("Error  " +error))