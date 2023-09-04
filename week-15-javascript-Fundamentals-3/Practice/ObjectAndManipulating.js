// Object Methods

// var emp = {
//     name: "John",
//     age: 30,
//     Salary: 50000
// }

// let keys = Object.keys(emp)
// console.log(keys)

// [ 'name', 'age', 'Salary' ]

// var emp = {
//     name: "John",
//     age: 30,
//     Salary: 50000
// }
                       // Method chaining
// let keys = Object.keys(emp).forEach((key) => console.log(key))

// name
// age
// Salary

// var emp = {
//     name: "John",
//     age: 30,
//     Salary: 50000
// }
// let descriptor = Object.getOwnPropertyDescriptor(emp, 'name')
// console.log(descriptor)

// { value: 'John', writable: true, enumerable: true, configurable: true }


// var emp = {
        
// }
// Object.defineProperty(emp, 'name', {
//    value: 'John',
//    writable: false
// })
// console.log(emp.name)

// OutPut
// John

// const data = {}
// Object.defineProperties(data, {
//     username:{
//         value: "peter",
//         writable: true
//     },
//     email:{
//         value: "john@gmail.com",
//         writable: 'true'
//     }
// })

// const data = {}
// Object.defineProperties(data, {
//     username:{
//         value: "peter",
//         enumerable: true
//     },
//     email:{
//         value: "john@gmail.com",
//         enumerable: 'true'
//     },
//     phone:{
//         value: "800000000",
//         enumerable: false
//     }
// })

// for(const key in data) {
//     console.log(`${key} : ${data[key]}`)
// }

// OutPut
// username : peter
// email : john@gmail.com
// ********************************
// const data = {}
// Object.defineProperties(data, {
//     username:{
//         value: "peter",
//         enumerable: true
//     },
//     email:{
//         value: "john@gmail.com",
//         enumerable: false
//     },
//     phone:{
//         value: "800000000",
//         enumerable: true
//     }
// })

// for(const key in data) {
//     console.log(`${key} : ${data[key]}`)
// }

// OutPut
// username : peter
// phone : 800000000

