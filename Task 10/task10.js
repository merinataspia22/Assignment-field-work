function fetchWithTimeout(url, ms) {
    return Promise.race([
        fetch(url),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Request Timed Out"));
            }, ms);
        })
    ]);
}

let url = prompt("Enter URL:");
let ms = parseInt(prompt("Enter timeout in milliseconds:"));

fetchWithTimeout(url, ms)
    .then(response => console.log("Request Successful"))
    .catch(error => console.log(error.message));