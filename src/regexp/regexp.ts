        
const maxQuantityText = "Dispo : 9 999 999 COL";
const cleanedText = maxQuantityText.replace(/\s+/g, '').trim();
const match = /\d+/.exec(cleanedText);

let maxQuantity = 0;
if (match) {
    maxQuantity = parseInt(match[0]);
}
console.log("maxQuantity = ", maxQuantity);

console.log('----------------');

const match2 = /[\d\s]+/.exec(maxQuantityText);
if (match2) {
    maxQuantity = parseInt(match2[0]);    
}
console.log("maxQuantityText = ", maxQuantityText);console.log("maxQuantityText = ", maxQuantityText);
console.log("match2 = ", match2);
console.log("maxQuantity = ", maxQuantity);