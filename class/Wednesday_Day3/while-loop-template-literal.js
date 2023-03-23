function loopWhile () {

    let i = 0 
    const end = 5;

    while ( i < end ) {
         // const resultPenguin = i + ' ' + 'hello'; 
        const resultPenguin =  `${i} hello`// template literal
        console.log(resultPenguin)
        i++
    }                                                   // order matters ; i++ before vs after
}

function madLib(name,car,color) {
    const sentence = `Hello your name is ${name}. You drive ${car} which is ${color}.` //from here on out we use template literals
        //const sentence = 'Hello your name' + name + '. You drive ' + car +' which is ' + '.' 
    console.log (sentence);
}

madLib('Madonna Rosenburger','Honda','yellow')
madLib ('Bingo', 'Ford', 'Lime')