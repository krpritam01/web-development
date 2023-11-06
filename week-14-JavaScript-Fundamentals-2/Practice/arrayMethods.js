let arr = [1,2,3,4,5];

// add last index arrar 
arr.push(6,7,5)
console.log(arr);

// remove last index arrar
arr.pop();
console.log(arr);

// remove first index arrar 
arr.shift()
console.log(arr);

// remove first index arrar 

arr.unshift(8);
console.log(arr);

// return Element 
let f = arr.shift();
console.log(f);
console.log(arr);

// add/concat two array 

a1 = [1,2,3,4,5];
a2 = [6,7,8,9];
let a3 = a1.concat(a2);
console.log(a1, a2, a3);

// convert/concat String 

let s = a3.join("")
console.log(s);

// reverse arrar 

a3.reverse();
console.log(a3);

// find element index 
console.log(a3.indexOf(8));

// Remember -> Not present Element in array thrn return  value -1

// Fatch particular positions indexes
let arr1 = [1,2,3,4,5,6,7,8]
console.log(arr1.slice(2, 6));

// add/remove Element particular positions
arr1.splice(3, 2, 11, 15)
console.log(arr1);