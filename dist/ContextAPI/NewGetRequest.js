"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewGetRequest = void 0;
function NewGetRequest(API, param) {
    // Spcific default value
    param = param || "";
    // Check if the value P != null || ... Do that
    if (param.length <= 0) {
        fetch(API)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((errors) => console.error(errors));
    }
    else {
        fetch(API)
            .then((response) => response.json())
            .then((data) => console.log(data.param))
            .catch((errors) => console.error(errors));
    }
}
exports.NewGetRequest = NewGetRequest;
//# sourceMappingURL=NewGetRequest.js.map