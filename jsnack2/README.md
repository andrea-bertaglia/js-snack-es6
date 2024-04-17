### Esercizio: js-snack-es6

## Snack2

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

### Svolgimento

- creo l'array squadre di calcio
- per ogni elemento dell'array
  - genero un numero random di punti
  - genero un numero random di falli subiti
  - aggiorno l'array con i dati generati
- tramite il metodo map creo un nuovo array che contiene solo i nomi delle squadre e i relativi falli subiti
