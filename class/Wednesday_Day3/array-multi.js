//Array = listing of data

const container =  [
    'parent first',    //0
    'parent second',   //1  //hanging comma is if you have a comma on this line
    [           //2 
        'child first', 
        'child second', 
        'child third', 
        'child fourth'
    ]
];

//Constuct

//Log
console.log('container', container);
console.log('container 2nd:', container[1]);
console.log('container 3rd:', container[2]);
console.log('container - child 2nd:', container[2][1]);


