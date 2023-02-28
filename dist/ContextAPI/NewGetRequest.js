"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewGetRequest = void 0;
function NewGetRequest(API, ...params) {
    params = params || null;
    params.reduce((pv, cv) => pv + "." + cv, "null");
    if (params == null) {
        fetch(API)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((errors) => console.error(errors));
    }
    else {
        fetch(API)
            .then((response) => response.json())
            .then((data) => console.log(data.params))
            .catch((errors) => console.error(errors));
    }
}
exports.NewGetRequest = NewGetRequest;
//# sourceMappingURL=NewGetRequest.js.map