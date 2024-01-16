// 1. Double using callback.

// Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.

function doubleArray(arr, callback) {
    const doubledArray = arr.map((num) => {
        return callback(num);
    });
    return doubledArray;
}

const originalArray = [2, 4, 5, 6];

function callback(num) {
    return num * 2;
}

const doubledArray = doubleArray(originalArray, callback);

console.log([doubledArray]);


// Output

// [ [ 4, 8, 10, 12 ] ]