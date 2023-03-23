//question ONE:

function findAnimalSound(species) {
    const getSound = 'animal'
    switch (getSound) {
        case 'cow':
            console.log ('moo');
            break;
        case 'monkey':
            console.log ('ooo-eee');
            break;
        case 'raptor':
            console.log ('AAAAAAAHHHH!!!');
            break; 
        default: 
            console.log ('This is a rubber ducky...squeek');
    }
}

findAnimalSound('raptor');

//question TWO:
function nameFruit() {
    let fruitName = 'banana'

    if (fruitName === 'avodcado') {
        console.log ('green')
    } else if (fruitName === 'apple') {
        console.log ('red')
    } else if (fruitName === 'banana') {
        console.log ('yellow')
    } else if (fruitName === 'kenep') {
        console.log('green')
    } else {
        console.log ('find a color wheel')
    }
}

nameFruit()

//question THREE: 

function getSumTotal(number1,number2) {
    const result = number1 + number2
    console.log(result)
}

getSumTotal (3,4000)