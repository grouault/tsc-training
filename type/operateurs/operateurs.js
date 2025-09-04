"use strict";
const toto = undefined;
// null coalesce
console.log(toto ?? 'titi');
console.log(null ?? 'n/A');
console.log(undefined ?? 'n/A');
console.log("" ?? 'true');
console.log(0 ?? 'titi');
console.log(0n ?? 'titi');
console.log("|| operateurs");
console.log(1 || 'titi');
console.log("" || 'titi');
