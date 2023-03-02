// import { NewGetRequest } from "./NewGetRequest";
// import { OldGetRequest } from "./OldGetRequest";

// Degapi Class [ Main Class ]
const degapi = {
    // Functions in Degapi Library
    // -------------- //
    // NewGet Function [ New Method ]
    nGet(API: string, params?: string) {
        // Spcific default value
        params = params || "";
        // Reduce Values for Params
        // params.reduce((pv: string, cv: string) => pv + "&" + cv, "");
        // Check if the value P != null || ... Do that
        if (params === "") {
            fetch(API)
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((errors) => console.error(errors));
        } else {
            // New Api url after editing
            const NEW_API = API + "/" + params;
            fetch(NEW_API)
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((errors) => console.error(errors));
        }
        console.log(params);
    },
    // DefGet Function [ Old Method ]
    async oGet(API: string) {
        const response = await fetch(API);
        const data = await response.json();

        if (response.status >= 200 && response.status < 300) {
            console.log(data);
        } else {
            console.error(`The status of API is ${response.statusText}`);
        }
    },
};
export { degapi };
