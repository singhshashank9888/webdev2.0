
const output = document.querySelector("#op");
const button = document.querySelector("#btn");
const name1 = document.querySelector("#name");
const delay = document.querySelector("#delay");

function setAlarm(person, delay) {
    const delayNum = Number(delay);
    const myPromise = new Promise((resolve, reject) => {
        if (delayNum < 0 || isNaN(delayNum)) {
            reject(new Error("Alarm delay must not be negative"));
            return;
        }
        setTimeout(() => {
            resolve(`Wakeup ${person}`);
        }, delay);
    });
    return myPromise;
}
//using async await
button.addEventListener("click", async () => {
    try {
        const message = await setAlarm(name1.value, delay.value);
        output.textContent = message;
    }
    catch(error) {
        output.textContent = `error : ${error.message}`;

    }
})
// button.addEventListener("click", () => {
//     setAlarm(name1.value, delay.value)
//         .then((message) => {
//             output.textContent = message;
//         })
//         .catch((error) => {
//             output.textContent = `error : ${error}`;
//         })
// })  