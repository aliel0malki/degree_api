"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.degapi = void 0;
const degapi = {
    NewGet(API, params) {
        params = params || "";
        if (params === "") {
            fetch(API)
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((errors) => console.error(errors));
        }
        else {
            const NEW_API = API + "/" + params;
            fetch(NEW_API)
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((errors) => console.error(errors));
        }
        console.log(params);
    },
    async DefGet(API) {
        const response = await fetch(API);
        const data = await response.json();
        if (response.status >= 200 && response.status < 300) {
            console.log(data);
        }
        else {
            console.error(`The status of API is ${response.statusText}`);
        }
    },
};
exports.degapi = degapi;
//# sourceMappingURL=__main__.js.map