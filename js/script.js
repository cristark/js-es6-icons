/* 
1 - Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
2 - Stampare poi tutte le icone utilizzando il template literal.
3 - Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon)
4 - Filtrare i risultati in base alla categoria (ricordate di svuotare il container).
Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni. 
*/

$(document).ready(() => {

    const icons = [
        {
        name: 'cat',
        display: 'cat',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'crow',
        display: 'crow',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'dog',
        display: 'dog',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'dove',
        display: 'dove',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'dragon',
        display: 'dragon',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'horse',
        display: 'horse',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'hippo',
        display: 'hippo',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'fish',
        display: 'fish',
        family: 'fas',
        prefix: 'fa-',
        type: 'animal'
        },
        {
        name: 'carrot',
        display: 'carrot',
        family: 'fas',
        prefix: 'fa-',
        type: 'vegetable'
        },
        {
        name: 'apple-alt',
        display: 'apple',
        family: 'fas',
        prefix: 'fa-',
        type: 'vegetable'
        },
        {
        name: 'lemon',
        display: 'lemon',
        family: 'fas',
        prefix: 'fa-',
        type: 'vegetable'
        },
        {
        name: 'pepper-hot',
        display: 'pepper-hot',
        family: 'fas',
        prefix: 'fa-',
        type: 'vegetable'
        },
        {
        name: 'user-astronaut',
        display: 'astronaut',
        family: 'fas',
        prefix: 'fa-',
        type: 'user'
        },
        {
        name: 'user-graduate',
        display: 'graduate',
        family: 'fas',
        prefix: 'fa-',
        type: 'user'
        },
        {
        name: 'user-ninja',
        display: 'ninja',
        family: 'fas',
        prefix: 'fa-',
        type: 'user'
        },
        {
        name: 'user-secret',
        display: 'secret agent',
        family: 'fas',
        prefix: 'fa-',
        type: 'user'
        }
    ];
    const inconColors = ['#FCAB64', '#A9E190', '#CE7DA5'];
    
    
    //| Estrapolo dall'array principale i differenti types per poterli associare al colore

    const iconType = genIconType(icons);
    console.log(`Types dell'array principale:`, iconType);

    /* const iconType = [];
    icons.forEach(element => {
        
        if (!iconType.includes(element.type)) {
            iconType.push(element.type);
        }
    }); */

    //| Utilizzo l'array appena creato come indice per associare ad ogni type dell'array principale il suo rispettivo colore, prendendolo dall'array iconColors

    const coloredIcons = addColor(icons, iconType, inconColors);
    console.log('Array completo di colori', coloredIcons);

    /* const coloredIcons = icons.map(element => {
        const typeIndex = iconType.indexOf(element.type);
        return {
            ...element, 
            color : inconColors[typeIndex]
        };
    }); */
    
    //| Attraverso il template literal creo le icone su doc HTML tramite Js

    displayIcons(coloredIcons);

    /* coloredIcons.forEach(element => {

        const {name, display, family, prefix, color} = element;

        $('.container').append(
            `
            <div class="icon_box">
                    <i class="${family} ${prefix}${name}" style="color:${color}"></i>
                    <p>${display}</p>
                </div>
            `
        );

    }); */

    //| Creo categorie nella select in base al tipo di icona, sfruttando l'array creato in precedenza
    const select = $('#filter_opt');
    
    iconType.forEach(element => {
        select.append(
            `
            <option value="${element}">${element.toUpperCase()}</option>
            `
        );
    });

    //| Creo filtro icone in base a categoria selezionata e lo stampo su doc HTML
    select.change(function(){

        //Pulisco HTML
        $('.container').html('');

        //Assegno value in base alla scelta dell'option dell'utente
        const optSelected = $(this).val();

        // Creo array filtrato in base al type degli oggetti
        const filterIcons = coloredIcons.filter(element => element.type == optSelected);
        
        if (filterIcons.length == 0) {
            displayIcons(coloredIcons);
        } else {
            displayIcons(filterIcons);
        }

    });
    
});

// - Funzioni -

// *Estrapolo types dall'array principale*
function genIconType(arr) {
    const resArr = [];
    arr.forEach(element => {
        
        if (!resArr.includes(element.type)) {
            resArr.push(element.type);
        }
    });

    return resArr;
};

// *Associare colore ad ogni type dell'array principale*
function addColor(gen, filArr, col) {

    const colArr = gen.map(element => {
        const typeIndex = filArr.indexOf(element.type);
        return {
            ...element, 
            color : col[typeIndex]
        };
    });

    return colArr;
};

// *Visualizzare icone su doc HTML*
function displayIcons(arr) {

    arr.forEach(element => {

        const {name, display, family, prefix, color} = element;

        $('.container').append(
            `
            <div class="icon_box">
                    <i class="${family} ${prefix}${name}" style="color:${color}"></i>
                    <p>${display}</p>
                </div>
            `
        );

    });

};
