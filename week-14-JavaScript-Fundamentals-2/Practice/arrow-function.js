// 1. One parameter, and a single return statement 

const square = (x) => x * x;

// 2. Multiple parameter, and a single return expression

const sumOftwoNumbers = (x, y) => x + y;

// 3. Multiple statement in function expression 

const sum = (x, y) => {
    console.log(`Adding ${x}`);
    return x + y;
};

// 4. Retuning an object

const sumAndDifference = (x, y) => ({ sum: x + y, difference: x - y });



// CALLING A FUNCTION 

let output1 = square(5); // OUTPUT: 25
let output2 = sumOftwoNumbers(1, 2); //OUTPUT: 3
let object3 = sum(1, 2); // OUTPUT ADDING 1 AND 2 = 3
let object4 = sumAndDifference(5, 3); // OUTPUT: {sum: 8, difference: 2}
