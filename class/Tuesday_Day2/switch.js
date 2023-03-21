const pet = 'dog';

switch(pet){
    case 'cat':
        console.log ('meow');
        break
    case 'dog':
        console.log ('woof');
        break
    case 'bird':
        console.log ('cheep');
        break
    case 'duck': //no console, peep next line
    case 'goose': //for a duck or a goose will print 'quack' sn: so cool
        console.log ('quack');
    default:
        console.log ('cool pet');
}