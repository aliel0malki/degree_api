"use strict";
// import { NewGetRequest } from "./NewGetRequest";
// import { OldGetRequest } from "./OldGetRequest";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.degapi = void 0;
// Degapi Class [ Main Class ]
const degapi = {
    // Functions in Degapi Library
    // -------------- //
    // NewGet Function [ New Method ]
    NewGet(API, params) {
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
        }
        else {
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
    DefGet(API) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(API);
            const data = yield response.json();
            if (response.status >= 200 && response.status < 300) {
                console.log(data);
            }
            else {
                console.error(`The status of API is ${response.statusText}`);
            }
        });
    },
};
exports.degapi = degapi;
//# sourceMappingURL=__main__.js.map