"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OldGetRequest = void 0;
async function OldGetRequest(API) {
    const response = await fetch(API);
    const data = await response.json();
    if (response.status >= 200 && response.status < 300) {
        console.log(data);
    }
    else {
        console.error(`The status of API is ${response.statusText}`);
    }
}
exports.OldGetRequest = OldGetRequest;
//# sourceMappingURL=OldGetRequest.js.map