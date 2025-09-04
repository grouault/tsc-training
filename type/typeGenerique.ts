function Courier<T>(box:T) : T {
  return box;
}

console.log(Courier("lettre"));
console.log(Courier(12));
console.log(Courier({"dentifrice": 1, "coca": 2}));