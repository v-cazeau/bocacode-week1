//Write a function that takes  a number of adults, a number of children and the number of beds in a vacation home and returns true if there are enough beds for everyone and false if not. Assume that adult will sleep if 2 to a bed. 


function sayIfEnough(numAdults, numChildren, numBeds) {
    //Divide the number of adults by 2
    const numAdultBeds = numAdults/2
    
    //Add that the number of kiddos
    const totalBeds = numAdultBeds + numChildren

    //Is that result <= number of beds
    return (totalBeds = numBeds)

//We refactored to the line above so below, is the same as above
//    if (totalBeds <= numBeds) {
//     return true
//    } else { 
//     return false
//    }
}
const canWeFit = sayIfEnough(8,40,9)
console.log ('Can we fit?', canWeFit)


//option + up or down, moves up or down
//option + shift, copies
//refactor means to see if you can make the code look a bit better
