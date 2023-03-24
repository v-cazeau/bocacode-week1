//question ONE

/*
We declare and initiate variables in JavaScript
*/

console.log('initiate');

//question TWO 

console.log('invoke');

//question THREE

    const backpack = {
        hydrate: 'water',
        eyewear: 'glasses', 
        laptop: 'macBook'
    };

    console.log(backpack)

//question FOUR

    let favoriteFruits = [
        "mango", 
        "lychee", 
        "strawberry",
        "papaya"
    ];

    function addFruit(name) {
        favoriteFruits.unshift(name)
    }

    addFruit('kiwi')
    console.log(favoriteFruits)
