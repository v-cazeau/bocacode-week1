//function decloration
function message() {

}

//+++++++++++++++++++++++++++

function message () {
    console.log('hello')
}

//invoke(call or initialize) the function 

message();

//++++++++++++++++++++++++++++
 function getMeow (){
    console.log ('Meow');
 }

 getMeow();
 getMeow();
 getMeow();

 //+++++++++++++++++++++++++++++
//adding a (the parameter)...thing PA...first is P
function hello(firstName) {
    console.log ('Hello ' + firstName); //concatnation
}

hello('Jarvis'); //hello(the arguement)...then is A
hello('cat who are you?');
hello('is it me you\'re looking for');

function getSumTotal(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    console.log(result);
}

getSumTotal(2,5);
getSumTotal(1200000,12000000000);
getSumTotal('sym','phony');
getSumTotal('back','forward');
getSumTotal('forward','back');
getSumTotal(3,' Blind Mice');


//++++++++++++++++++++++++++++++++

function makePie(quantity){
    const pie = '🥧'.repeat(quantity); //repeats over and over again
    console.log(pie);
}

makePie(4000);

//Khaled +++++++++++++++++++++++++++++++++

function makeAnimal(animal,quantity) {
    const result = animal.repeat(quantity) + ' grrrraaaaah!';
    return result; //returns the value
}

const renderResult = makeAnimal('🐼', 5)
console.log (renderResult)

//+++++++++++++++++++++++++++++++++

function generateLoudSpeaker(text) { //every function name always use a short verb
    const nextText = '🔊 ' + text.toUpperCase(); //.toUpperCase() changes everything to UPPER CASE  
    return nextText;  //console.log excute the command; return "poops" or "BM" think "stomach function"

}

const computer = generateLoudSpeaker('whisper...wh...is...per'); //function is now in variable ; camel case the letters, same result, why, b/c of the .to^^, ditto with .toLowerCase()
console.log (computer);
