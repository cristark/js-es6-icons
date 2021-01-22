/* 
1 - Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.

2 - Stampare poi tutte le icone utilizzando il template literal.

3 - Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).

4 - Filtrare i risultati in base alla categoria (ricordate di svuotare il container).

Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni. 
*/

const icons = [
    {
    name: 'cat',
    family: 'fas',
    prefix: 'fa-',
    type: 'animal'
    },
    {
    name: 'crow',
    family: 'fas',
    prefix: 'fa-',
    type: 'animal'
    },
    {
    name: 'dog',
    family: 'fas',
    prefix: 'fa-',
    type: 'animal'
    },
    {
    name: 'dove',
    family: 'fas',
    prefix: 'fa-',
    type: 'animal'
    },
    {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    type: 'animal'
    },
    {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    type: 'animal'
    },
    {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    type: 'animal'
    },
    {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    type: 'animal'
    },
    {
    name: 'carrot',
    family: 'fas',
    prefix: 'fa-',
    type: 'vegetable'
    },
    {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    type: 'vegetable'
    },
    {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    type: 'vegetable'
    },
    {
    name: 'pepper-hot',
    family: 'fas',
    prefix: 'fa-',
    type: 'vegetable'
    },
    {
    name: 'user-astronaut',
    family: 'fas',
    prefix: 'fa-',
    type: 'user'
    },
    {
    name: 'user-graduate',
    family: 'fas',
    prefix: 'fa-',
    type: 'user'
    },
    {
    name: 'user-ninja',
    family: 'fas',
    prefix: 'fa-',
    type: 'user'
    },
    {
    name: 'user-secret',
    family: 'fas',
    prefix: 'fa-',
    type: 'user'
    }
];

const inconColors = ['blue', 'orange', 'purple'];