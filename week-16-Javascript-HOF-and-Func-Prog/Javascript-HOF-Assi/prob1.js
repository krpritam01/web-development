let input = "Kumar Pritam"

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

function reverseWithDelay(inputString) {
    setTimeout(function () {
        let reversed = reverseString(inputString);
        console.log("reversed String: " + reversed);
    }, 2000);
}

reverseWithDelay(input);


// OUTPUT:
// reversed String: matirP ramuK
