const ma_fonction = () => {
  console.log("ma fonction");
}

type UserNames = {
  user1: string |null;
  user2: string | null;
}

type composantProps = {
  pseudos: UserNames,
  uneFonction: (pseudos:UserNames) => void
}

const monComposant = (props:composantProps) => {


  console.log("mon-composant");
  console.log({props});
  props.uneFonction(props.pseudos);
  return null;
}

const showPseudos = (pseudos:UserNames) => {
  console.log({pseudos})
}

monComposant({pseudos: {user1: 'milo', user2: 'mila'}, uneFonction:showPseudos });
