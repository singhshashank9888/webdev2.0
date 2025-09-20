const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


const options = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
        title: "MyNammmme",
        userId: 5,
    }),
};

async function getData() {
    const response = await fetch('https://dummyjson.com/posts');
    let data = await response.json();
    console.log("get data response:", data);
}
async function postData() {
    const response = await fetch('https://dummyjson.com/posts/add', options);
    let data = await response.json();
    console.log("post data reponse", data);
}

async function processData() {

    await postData();
    await getData();
}
processData();