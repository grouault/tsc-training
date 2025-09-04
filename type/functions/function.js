"use strict";
const ma_fonction = () => {
    console.log("ma fonction");
};
const monComposant = (props) => {
    console.log("mon-composant");
    console.log({ props });
    props.uneFonction(props.pseudos);
    return null;
};
const showPseudos = (pseudos) => {
    console.log({ pseudos });
};
monComposant({ pseudos: { user1: 'milo', user2: 'mila' }, uneFonction: showPseudos });
