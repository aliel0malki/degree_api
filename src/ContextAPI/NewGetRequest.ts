function NewGetRequest(API: string, ...params: any[]) {
    // Spcific default value
    params = params || null;
    // Reduce Values for Params
    params.reduce((pv: any, cv: any) => pv + "." + cv, "null");
    // Check if the value P != null || ... Do that
    if (params == null) {
        fetch(API)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((errors) => console.error(errors));
    } else {
        fetch(API)
            .then((response) => response.json())
            .then((data) => console.log(data.params))
            .catch((errors) => console.error(errors));
    }
}
export { NewGetRequest };
