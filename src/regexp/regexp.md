
<const cleanedText = maxQuantityText.replace(/\s+/g, '').trim();>

1. La regexp : /\s+/g

/ ... / → les barres obliques délimitent une expression régulière en JavaScript/TypeScript.

\s → signifie un caractère d’espace blanc. Ça inclut :

espace normal " " (\u0020)

tabulation \t

retour à la ligne \n

retour chariot \r

form feed \f
👉 Mais pas toujours les espaces insécables (\u00A0), ça dépend de l’implémentation.

+ → veut dire "1 ou plusieurs". Donc \s+ = "un ou plusieurs espaces consécutifs".

g → c’est le flag global.

Sans g, replace n’enlèverait que la première occurrence trouvée.

Avec g, il enlève toutes les occurrences dans la chaîne.

👉 Donc /\s+/g = "trouve toutes les séquences d’un ou plusieurs espaces, tabulations ou retours à la ligne".