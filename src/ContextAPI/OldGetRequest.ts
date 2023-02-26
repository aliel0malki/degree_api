async function OldGetRequest(API: string) {
    const response = await fetch(API);
    const data = await response.json();

    if (response.status >= 200 && response.status < 300) {
        console.log(data);
    } else {
        console.error(`The status of API is ${response.statusText}`);
    }
}
export { OldGetRequest };
