// question ONE

function multiplyTHESE(num1, num2) {
    const result = num1* num2;
    console.log(result); 
}



multiplyTHESE(3,5);

// question TWO

function getGrade(numGrade) {
//    const numGrade = result()
//    return result('Letter Grade: A') :
   
    if (numGrade >= 90) {
        console.log('Letter Grade: A'); 
    } else if (numGrade >= 80) {
        console.log('Letter Grade: B'); 
    } else if (numGrade >=70) {
        console.log('Letter Grade: C');
    } else if (numGrade >=60) {
        console.log('Letter Grade: D');
    } else {
        console.log('Letter Grade: F')
    }
}

getGrade(89)

// question THREE

    const genreTypes = [
        'Konpa', 
        'Soca', 
        'Pop', 
        'Disco', 
        'Opera',
        'Classical', 
        'Musicals', 
        'HipHop', 
        'Afrobeats', 
        'Punk Rock', 
        'Country'
    ]

// question FOUR

function musicGen(genreTypes){
    return genreTypes[0];
}
const firstGen = musicGen(genreTypes);
 console.log(firstGen); 