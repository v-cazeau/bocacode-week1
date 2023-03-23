//object demo 

// const shirt = {
//     shirtName: 'denim jacket',
//     color: 'black', 
//     quanity: 1,
//     size: 'lg', 
//     like: true
// }

// //const key = 'color'
// const shirtColor = shirt['color'];
// const shirtSize = shirt.size;

// console.log('shirt color:', shirtColor); 
// console.log('shirt size:', shirtSize)


const animal = {
    type: 'elephant', 
    color: 'gray', 
    stage: 'baby',
    size: 'large',
    like: 'yes',
    onceAFavorite: true,
    stillAFavorite: 'kinda...I still enjoy elephants'

}

//bracket notation 
const sizeAnimal = animal['size'];
//dot notation
const whatIsIt = animal.type; 

console.log ('How big is this?', sizeAnimal); 
console.log ('What animal?', whatIsIt)