// Prob 3. Write a program that takes an object as input and returns the number of properties it has.

function contProperties(obj) {
    return Object.keys(obj).length;
}

const exampleObject = {a: 1, b: 2, c: 3};
console.log(contProperties(exampleObject));

// Output:
// 3