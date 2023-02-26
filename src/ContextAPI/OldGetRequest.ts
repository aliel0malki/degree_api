async function OldGetRequest(API: string, P: string) {
    const response = await fetch(API);
    const data = await response.json();

    if (response.status >= 200 && response.status < 300) {
        if (P != null || P != undefined || P != "") {
            console.log(data.P);
        } else {
            console.log(data);
        }
    } else {
        console.error(`The status of API is ${response.statusText}`);
    }
}
export { OldGetRequest };
