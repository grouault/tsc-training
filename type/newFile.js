"use strict";
if (typeof (result) === "number") {
    // pas d'erreur Typescript avec le guardlife
    console.log("unknown fonction : ", add(result, 3));
}
else {
    console.log("unknown fonction : ", result);
}
