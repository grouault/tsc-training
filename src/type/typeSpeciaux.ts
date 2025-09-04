import { setTimeout } from "timers/promises";

const add =  (a: number, b:number) => (a + b);


// ANY
// attention : ne génère pas d'erreur dans la fonction.
const toto: any = 'toto';

console.log(add(2,3));
console.log(add(toto, 3));

// UNKNOWN
const catName:unknown = "Mittens";
const catAge:unknown = 7;
// genère une erreur typescript
console.log(add(catName, catAge));

if (typeof(catName) === "number" && typeof(catAge) === "number") {
  // pas d'erreur typescript avec le typeguard
  console.log(add(catName, catAge));
}

function testUnknown (value: number) {
  if (value === 0) {
    return 0
  }
  if (value === 1) {
    return 1
  }
  return "erreur";
}

const result:unknown = testUnknown(0);
if (typeof(result) === "number") {
  // pas d'erreur Typescript avec le guardlife
  console.log("unknown fonction : ", add(result, 3));
} else {
  console.log("unknown fonction : ", result);
}

// NEVER
const throwError = (message: string): never => {
  throw new Error(message);
};
try {
  throwError("test error");  
} catch(error) {
  console.log({error});
}

// boucle infinie
const infiniteLoop = async ():Promise<never> => {
  while (true) {
    setTimeout(function() {
      console.log("Retardée d'une seconde.");
    }, 1000);
    // Cette fonction ne se termine jamais, car elle entre dans une boucle infinie
  }
}

// VOID
// toute fonction void renvoie undefined en javascript
const voidValue = () : void=> console.log("toto");
console.log(voidValue())
