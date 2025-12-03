async function fetchData() {
    try { 
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
        if (!response.ok) {
            throw new Error(`HTTPS ERROR ${response.status}`);
        }
        const data=await response.json();
        console.log(data[0].name);



    }
    catch (error) {
        console.error(`Couldnt get product ${error.message}`);
    }
}
fetchData();