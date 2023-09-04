// Pass by value vs Pass by reference

// Pass by value

// let name = 'John';

// let newName = name;

// name = 'peter';

// console.log(name)
// console.log(newName)

// // Output:
// // peter
// // John

// let num1 = 10

// let num2 = num1;

// num1 = 400

// console.log(num1)
// console.log(num2)
// // Output:
// // 400
// // 10

// Pass by reference

// // Create NonPrimitive type Object
// let user = {
//     name: 'John',
//     age: 20
// }
// // Pass by reference
// const newUser = user

// user.name ='Peter'
// console.log(user)
// console.log(newUser)

// // Output:
// // { name: 'Peter', age: 20 }
// // { name: 'Peter', age: 20 }

// Example of Array Pass by reference

let nums = [10 ,20, 30, 40]

let nums2 = nums

nums2[1] = 999

console.log(nums)
console.log(nums2)

// Output:
// [ 10, 999, 30, 40 ]
// [ 10, 999, 30, 40 ]