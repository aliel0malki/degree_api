"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewGetRequest = void 0;
function NewGetRequest(API) {
    fetch(API)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((errors) => console.error(errors));
}
exports.NewGetRequest = NewGetRequest;
//# sourceMappingURL=NewGetRequest.js.map