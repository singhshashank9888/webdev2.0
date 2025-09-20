// while the handler passed to then() is called when the asynchronous operation succeeds, the handler passed to catch() is called when the asynchronous operation fails
// const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

const fetchPromise = fetch("bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

fetchPromise
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error(`Couldn't get product ${error}`);
    });