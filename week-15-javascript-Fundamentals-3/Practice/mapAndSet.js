// Set and Maps

// unordered collection

// unique values

// const setExample = new Set();

// setExample.add(10)
// setExample.add(20)

// console.log(setExample)

// // Output:
// // Set(2) { 10, 20 }

// console.log(setExample.size)

// // Output:
// // 2

// setExample.clear()

// console.log(setExample)

// // Output:
// // Set(0) {}

// const setExample = new Set();

// setExample.add(10)
// setExample.add(20)
// setExample.add(30)
// setExample.add(40)

// console.log(setExample)
// console.log(setExample.size)

// // Delete set Element
// console.log("After Delete")
// setExample.delete(30)

// console.log(setExample)

// // Output:
// // Set(4) { 10, 20, 30, 40 }
// // 4
// // After Delete
// // Set(3) { 10, 20, 40 }

// const data = new Set();

// data.add("John")

// data.add({
//     likes: 'javascript'
// })

// console.log(data.entries())
    
// Output:
// // [Set Entries] {
// //     [ 'John', 'John' ],
// //     [ { likes: 'javascript' }, { likes: 'javascript' } ]
// //   }
// //   PS 

// const data = new Set();

// data.add(10)
// data.add(20)
// data.add(30)
// data.add(40)

// function multiply(value1, value2){
//     console.log(`data[${value1}] : data[${value2 * 2}]`)
// }

// data.forEach(multiply)

// // Output:
// // data[10] : data[20]
// // data[20] : data[40]
// // data[30] : data[60]
// // data[40] : data[80]

// console.log(data.has(200))
// // Output:
// // false

// console.log(data.keys())

// // Output:
// // [Set Iterator] { 10, 20, 30, 40 }

// // const kay = data.keys()
// // console.log(keys)

// console.log(data.values())
// // Output:
// // [Set Iterator] { 10, 20, 30, 40 }

// Array convart to Set

// let arr = [10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30, 40]

// const set  = new Set(arr)

// console.log(set)

// // Output:
// // Set(4) { 10, 20, 30, 40 }

// // set convart to Array

// console.log(Array.from(set))

// // Output:
// // [ 10, 20, 30, 40 ]


// Map Data Stracture

//Keyed collection
//map allows keys of any type

// let map = new Map()

// console.log(map)

// // Output:
// // Map(0) {}

// let map = new Map()

// map.set('1', 'stringValue')
// map.set(1, 'numberValue')
// map.set(true, 'booleanValue')

// console.log(map.get(1))
// console.log(map.get('1'))
// console.log(map)

// // Output:
// // numberValue
// // stringValue
// // Map(3) {
// //     '1' => 'stringValue',
// //     1 => 'numberValue',
// //     true => 'booleanValue'
// //   }

// let user = {name : "John"}

// let visitsMap = new Map()

// visitsMap.set(user, 100)

// console.log(visitsMap.get(user))

// // Output:
// // 100

// let map = new Map()

// map.set('1', 'strvalue')
//     .set(1, 'numvalue')
//     .set(true, 'boolvalue')

// console.log(map)

// // Output:
// // Map(3) { '1' => 'strvalue', 1 => 'numvalue', true => 'boolvalue' }

// let itemsMap = new Map(
//     [
//         ['tomatoes', 100],
//         ['onions', 400],
//         ['patatoes', 500]
//     ]
// )

// console.log(itemsMap)

// // Output:
// // Map(3) { 'tomatoes' => 100, 'onions' => 400, 'patatoes' => 500 }

// console.log(itemsMap.keys())

// // Output:
// // [Map Iterator] { 'tomatoes', 'onions', 'patatoes' }


// for (let item of itemsMap.keys()){
//     console.log(item)
// }

// // Output:
// // tomatoes
// // onions
// // patatoes

// for (let item of itemsMap.values()){
//     console.log(item)
// }

// // Output:
// // 100
// // 400
// // 500

// for (let item of itemsMap){
//     console.log(item)
// }

// // Output:
// // [ 'tomatoes', 100 ]
// // [ 'onions', 400 ]
// // [ 'patatoes', 500 ]

// let itemsMap = new Map(
//     [
//         ['tomatoes', 100],
//         ['onions', 400],
//         ['patatoes', 500]
//     ]
// )

// itemsMap.forEach((value, key, map) => {
//     console.log(`${key} : ${value}`)
// })

// // Output:
// // tomatoes : 100
// // onions : 400
// // patatoes : 500


// let itemsMap = new Map(
//     [
//         ['tomatoes', 100],
//         ['onions', 400],
//         ['patatoes', 500]
//     ]
// )


// // map form object

// let user = {
//     name: 'John',
//     age:20
// }

// // console.log(Object.entries(user))

// // Output:
// // [ [ 'name', 'John' ], [ 'age', 20 ] ]

// let map = new Map(Object.entries(user))
// console.log(map)

// // Output:
// // Map(2) { 'name' => 'John', 'age' => 20 }


let itemsMap = new Map(
    [
        ['tomatoes', 100],
        ['onions', 400],
        ['patatoes', 500]
    ]
)

// console.log(itemsMap.entries())

// Output:
// [Map Entries] {
//     [ 'tomatoes', 100 ],
//     [ 'onions', 400 ],
//     [ 'patatoes', 500 ]
//   }

let obj = Object.fromEntries(itemsMap.entries())

console.log(obj)

// Output:
// { tomatoes: 100, onions: 400, patatoes: 500 }