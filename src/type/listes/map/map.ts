// import customers from "./datas/customer";
import customersJson from "./datas/customers.json" ;
import {mapCustomers, mapDate} from "./datas/datas.js";

type Personne = {date?: string , id: number, name: string};

// import json
// Le type est inférencé.
console.log({customersJson});
console.log(typeof customersJson);

// ici on force le type des données récupérées.
const customers = customersJson as Personne[];
console.log({customers});

// import object JavaScript
console.log({mapCustomers})

console.log(Object.values(mapCustomers));

for (const value of Object.values(mapCustomers)) {
  console.log({value});
}


const personnes:Personne[] = [];
for (const [date, personne] of Object.entries(mapDate)) {
  const {name} = personne;
  personnes.push({date, ...personne});
  console.log({date});
  switch (date) {
    case '2024-05-05':
      console.log("ok", name);
      break;
    default:
      console.log("ko", name);
      break;
  }
}
console.log({personnes});
