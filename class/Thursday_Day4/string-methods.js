// Length Function

function strLength1 () {
    const string = "Great idea Meghann!!";
    console.log(string.length);
}

const strLength2 = () => {
    const string = "Great idea Meghann!!";
    console.log (string.length);
}

// Length Invoke
strLength1()

// To UpperCase
function toUpper1() {
    const string= "local scope"; 
    console.log(string.toUpperCase()); 
}

const toUpper2 = () => {
    const string= "local scope"; 
    console.log(string.toUpperCase()); 
}
//.toUpperCase is referencing to invoke 

toUpper1()

//Trim
function strTrim1 () {
    const string = "  Hello this is Major Tom  ";
    console.log("str trim:", string.trim());
}

const strTrim2 = () => {
    const string = "  Hello this is Major Tom  ";
    console.log("str trim:", string.trim());
}

strTrim1(); 

//Replace

function strReplace1 () {
    const str = "I didn't sleep much last night.";
    const subject = "sleep much";
    const replace = "eat anything";
    console.log("str replace:", str.replace(subject, replace))
}

const strReplace2 = () => {
    const str = "I didn't sleep much last night.";
    const subject = "sleep much";
    const replace = "eat anything";
    console.log("str replace:", str.replace (subject, replace))
}

strReplace2 ();

//Substring

function strSub1 () {
    const str = "I like big fonts and I cannot lie.";
    console.log ("substring1:")
    console.log ("subString2:", str.substring(7,15));
}

const strSub2 = () => {
    const str = "I like big fonts and I cannot lie.";
    console.log ("subString:", str.substring(7,15));
}

strSub1();

//Split 

function strSplit1() {
    const str = "i like starwars. ho purrr";
    console.log ("str split:", str.split(" "))
}

const strSplit2 = () => {
    const str = "i like starwars. ho purrr";
    console.log ("str split:", str.split(" "))
}

strSplit2()

//.startsWith()
//.endWith()
//.includes()
//.indexOf()  <-returning position
//.split  <-returns an array as a substring
