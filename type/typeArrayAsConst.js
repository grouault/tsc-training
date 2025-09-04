"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = __importDefault(require("prompt"));
// https://www.npmjs.com/package/prompt
// avec typescript : npm -i --save-dev  @types/prompt
// as : assertion ou cast
// indique au transpileur que le type est différent de celui qu'il a deduit.
// le as const : tranforme les types primitifs en littéraux
//  --> rend nos variables immmuables / on ne peut plus modifier leur type
// --> la seule valeur pour la variable devient celle du litteral.
//
// sans le as: le type est string[]
// avec le as const: le type: tableau de litteral: readonly
const messageTypes = ['SUCCESS', 'ERROR', 'WARNING'];
let infoResult = null;
const schemaPrompt = {
    properties: {
        username: {
            description: 'saisie le nom attendu'
        },
        lastName: {
            description: 'saisie le nom de famille'
        }
    }
};
prompt_1.default.start();
prompt_1.default.get(schemaPrompt, function (err, result) {
    if (err) {
        return onErr(err);
    }
    // console.log('  Username: ' + result.username);
    if (result.username === 'titi' && result.lastName === 'titi') {
        infoResult = 'SUCCESS';
    }
    else {
        infoResult = 'ERROR';
    }
    console.log("Result : " + infoResult);
});
function onErr(err) {
    console.log(err);
    return 1;
}
