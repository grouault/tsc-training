## Lancer les commandes
```bash
npm run build # pour lancer la compilation TS en JS dans dist/
npm run watch # compiler en continue vers dist
```

## Exécution des commandes
```bash
> node fichier.js # lancer le ficher js avec node
> nodemon --watch dist dist/index.js #
```

Que fait exactement: nodemon --watch dist dist/index.js

--watch dist: demande à nodemon de surveiller le dossier dist (et ses sous-dossiers).
dist/index.js: c’est le script à exécuter. Nodemon le lance avec Node (équivalent à node dist/index.js).
Comportement: à chaque ajout/modification/suppression d’un fichier dans dist (par exemple, quand tsc -w recompîle), nodemon tue le process en cours et relance dist/index.js. Vous voyez donc immédiatement le résultat de votre code recompilé.

Usage typique avec TypeScript

Terminal A: tsc -w (compile en continu vers dist)
Terminal B: nodemon --watch dist dist/index.js (relance sur chaque changement dans dist)