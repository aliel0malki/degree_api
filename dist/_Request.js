"use strict";
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
exports.getRequest = void 0;
function getRequest(API) {
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
}
exports.getRequest = getRequest;
/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
*/
