// Math

// console.log(Math.abs(-15))

// console.log(Math.abs(15))

// console.log(Math.exp(2))

// console.log(Math.sqrt(25))

// console.log(Math.trunc(5.7))

// console.log(Math.round(4.7)) // round nearest integer

// console.log(Math.round(4.4))

// // Output:
// // 15
// // 15
// // 7.38905609893065
// // 5
// // 5
// // 5
// // 4

// console.log(Math.ceil(3.1)) // round up

// console.log(Math.floor(3.9)) // round down

// console.log(Math.PI)

// // Output:
// // 4
// // 3
// // 3.141592653589793

// console.log(Math.pow(2,3))

// // Output:
// // 8

// console.log(Math.max(10,50,6))

// console.log(Math.min(10,50,6))

// // Output:
// // 50
// // 6

// String

// console.log("Hello World !")
// console.log('Hello World !')
// console.log(`Hello World !`)

// // Output:
// // Hello World !
// // Hello World !
// // Hello World !

// console.log('${10 + 20}')
// console.log("${10 + 20}")
// console.log(`${10 + 20}`)

// // Output:
// // ${10 + 20}
// // ${10 + 20}
// // 30    

// console.log('Hello World!'.length)
// console.log('Hello World!'[1])

// // Output:
// // 12
// // e

// immutable

// let str = 'hello'

// str[0] = 'w'

// console.log(str)

// // Output:
// // hello

// console.log('hello'.at(1))
// console.log('hello'.at(-1))

// // Output:
// // e
// // o

// console.log('chartAt'.charAt(3))

// // Output:
// // r

// console.log(`${hello} ${world}`)
// console.log("hello" + " " + "world")

// // Output:
// // hello world
// // hello world

// console.log('endWith'.endsWith("with"))
// console.log('endWith'.endsWith("With"))
// console.log('endwith'.endsWith("with"))
// console.log('endWith'.endsWith("end"))

// // Output:
// // false
// // true
// // true
// // false

// console.log('includes'.includes('c'))
// console.log('includes'.includes('o'))

// // Output:
// // true
// // false

// console.log('indexOF'.indexOf('O'))
// console.log('indexOF'.indexOf('m'))

// // Output:
// // 5
// // -1

// console.log('padEnd'.padEnd(10, '!'))
// console.log('padEnd'.padEnd(20, '!'))

// // Output:
// // padEnd!!!!
// // padEnd!!!!!!!!!!!!!!

// console.log('padStart'.padStart(10, '$'))
// console.log('padEnd'.padEnd(10, '$'))

// // Output:
// // $$padStart
// // padEnd$$$$

// console.log('hello'.repeat(5))
// console.log('hello world world '.replace('world','everyone'))
// console.log('hello world world '.replaceAll('world','everyone'))

// // Output:
// // hellohellohellohellohello
// // hello everyone world
// // hello everyone everyone 

// console.log('hello world'.slice(6))
// console.log('hello world'.slice(6,11))

// // Output:
// // world 
// // world

// console.log('hello'.substring(2))
// console.log('hello'.substring(1,3))

// // Output:
// // llo
// // el

// console.log('hello world'.startsWith('hell'))

// // Output:
// // true

// console.log("hello, world, hello, world".split(","))

// // Output:
// // [ 'hello', ' world', ' hello', ' world' ]

// console.log('hello world'.toLowerCase())
// console.log('hello world'.toUpperCase())

// // Output:
// // hello world
// // HELLO WORLD

// console.log('   hello World'   .trim())
// console.log('   hello World'   .trimEnd())
// console.log('   hello World'   .trimStart())

// // Output:
// // hello World
// //    hello World
// // hello World

// Date

// let dateTime = new Date()
// console.log(dateTime)

// // Output:
// // 2023-09-03T00:40:25.939Z

// console.log(Date.now()) //in milliseconds

// // Output:
// // 1693701738958

// let dateTime = new Date()
// console.log(dateTime.getDate())

// // Output:
// // 2

// let dateTime = new Date()
// console.log(dateTime.getDay())

// // Output:
// // 6

// let dateTime = new Date()
// console.log(dateTime.getFullYear())
// console.log(dateTime.getHours())
// console.log(dateTime.getMinutes())
// console.log(dateTime.getMonth())

// // Output:
// // 2023
// // 17
// // 52
// // 8

let dateTime = new Date()
console.log(dateTime.setDate(15))
console.log(dateTime.setFullYear(2050))
console.log(dateTime.toDateString())
console.log(dateTime.toISOString())
console.log(dateTime.toJSON())
console.log(dateTime.toUTCString())

// Output:
// 1694825918820
// 2546902718820
// Thu Sep 15 2050
// 2050-09-16T00:58:38.820Z     
// 2050-09-16T00:58:38.820Z     
// Fri, 16 Sep 2050 00:58:38 GMT