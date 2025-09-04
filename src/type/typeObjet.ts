const name = 'John Doe';
const pow = (x: number, y:number) => x ** y;
console.log(pow(3,3))


type DogName = 'rex' | 'rexy';
let dogName = "rex" as DogName;
console.log(dogName);


// TABLEAU
const variants = ['primary','secondary','tertiary'] as const;
type VARIANT = typeof variants[number];

// objet
const dog = {
  name: 'rex',
  age: 3
} as const;

// typeof permet de passer du mon javascript au typescript
// on récupère une variable le type d'une variable javascript pour le
// passer au typescript
type DogType = typeof dog;

// KEYOF - keyof
type User = {
  name: string,
  age: number
}

// récupérer le type d'une clé
type UserName = User["name"];
type UserAge = User['age'];
// récupérer les clés sous forme de littéral
type UserKeys = keyof User; // name, age

const numbers = [1,2,3] as const;
type NumbersKeys = keyof typeof numbers;
for ( let i in numbers) {
  console.log("number = ", i);
}

const user = {
  name: 'John',
  age: 32
}

console.log(Object.keys(user));
Object.keys(user).forEach(key => {
  console.log(user[key as UserKeys]);
}); 

type Pseudos = {
  user1: string |null;
  user2: string | null;
}

const pseudos:Pseudos = {
  user1: 'titi',
  user2: 'toto'
}

  
export {}