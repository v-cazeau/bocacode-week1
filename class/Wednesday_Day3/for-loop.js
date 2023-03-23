//FOR LOOP IN FUNCTION
//1/2 Declare Function (Create function)
function loopNumber(total) {
    // const total = 100; | before was contant now w/ the cont // the total is now a parameter
    for (let i=0; i < total; i++) { 
        console.log(i);
    }
}

//2/2 Invoke the function (Start the function)
loopNumber();  //now the number of the parameter in this function will print the arguement

//for loops take 3 aspects : 1 where you start 2 the condition 3 where you're looping

const total = 100;

for (let i=0; i < total; i++) {
    console.log(i);
}

//adding a parameter
function loopNumber(char,total) {
    const result = i + '=' + char //counts the char 
    for (let i= 0; i<total; i++) {
        console.log(char);
    }
}

loopNumber('🥶',233)