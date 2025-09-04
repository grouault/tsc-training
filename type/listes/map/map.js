"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import customers from "./datas/customer";
const customers_json_1 = __importDefault(require("./datas/customers.json"));
const datas_js_1 = require("./datas/datas.js");
// import json
// Le type est inférencé.
console.log({ customersJson: customers_json_1.default });
console.log(typeof customers_json_1.default);
// ici on force le type des données récupérées.
const customers = customers_json_1.default;
console.log({ customers });
// import object JavaScript
console.log({ mapCustomers: datas_js_1.mapCustomers });
console.log(Object.values(datas_js_1.mapCustomers));
for (const value of Object.values(datas_js_1.mapCustomers)) {
    console.log({ value });
}
const personnes = [];
for (const [date, personne] of Object.entries(datas_js_1.mapDate)) {
    const { name } = personne;
    personnes.push({ date, ...personne });
    console.log({ date });
    switch (date) {
        case '2024-05-05':
            console.log("ok", name);
            break;
        default:
            console.log("ko", name);
            break;
    }
}
console.log({ personnes });
