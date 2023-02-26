function NewGetRequest(API: string) {
    fetch(API)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((errors) => console.error(errors));
}
export { NewGetRequest };
