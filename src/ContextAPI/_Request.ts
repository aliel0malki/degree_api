async function getRequest(API: string) {
    const response = await fetch(API);
    const data = await response.json();

    if (response.status >= 200 && response.status < 300) {
        console.log(data);
    } else {
        console.error(`The status of API is ${response.statusText}`);
    }
}

export { getRequest };
/*
New Method available in BETA 0.9.7
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
*/
