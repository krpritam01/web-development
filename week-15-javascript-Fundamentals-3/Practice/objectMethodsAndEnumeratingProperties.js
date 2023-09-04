// Objects

// Object literal

// let employee = {
//     id:10,
//     name: 'john',
//     salary: 5000
// }
// console.log(employee)

// Output: { id: 10, name: 'john', salary: 5000 }

// New instance Object Constractor

// const employee = new Object()
// employee.id = 20;
// employee.name = 'peter';
// employee.salary = 30000;

// console.log(employee)

// Output: { id: 20, name: 'peter', salary: 30000 }

// easy way use new keyword to Object constractor

// function Employee(id, name, salary) {
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
// }

// const employee1 = new Employee(40, 'Alex', 40000)
// const employee2 = new Employee(50, 'pritam', 50000)
// console.log(employee1)
// console.log(employee2)

// Output:
// Employee { id: 40, name: 'Alex', salary: 40000 }
// Employee { id: 50, name: 'pritam', salary: 50000 }

// Object access

// let emp = {id: 40, name: 'Alex', salary: 40000};
// dot notation or // square bracket notation 

// console.log(emp.id)
// console.log(emp['salary'])

//  Output:
// 40
// 40000
 
//Modift Data or add Data

// let emp = {id: 40, name: 'Alex', salary: 40000};
// // dot notation or // square bracket notation 

// // console.log(emp.id)
// // console.log(emp['salary'])

// emp.city = 'Delhi'
// emp['country'] = 'India'

// console.log("Old object", emp)

//  Output:
// Old object {      
//     id: 40,
//     name: 'Alex',   
//     salary: 40000,  
//     city: 'Delhi',  
//     country: 'India'
//   }

// Change Data

// let emp = {id: 40, name: 'Alex', salary: 40000};
// // dot notation or // square bracket notation 

// // console.log(emp.id)
// // console.log(emp['salary'])

// emp.city = 'Delhi'
// emp['country'] = 'India'

// console.log("Old object", emp)
// // Update data
// emp.name = "Pritam";
// emp.city = "Mumbai";
// console.log("Updata object", emp)

// Output:
// Old object {      
//     id: 40,
//     name: 'Alex',   
//     salary: 40000,  
//     city: 'Delhi',  
//     country: 'India'
//   }
//   Updata object {  
//     id: 40,        
//     name: 'Pritam',
//     salary: 40000,
//     city: 'Mumbai',
//     country: 'India'
//   }

// Delete

// let emp = {id: 40, name: 'Alex', salary: 40000};
// // dot notation or // square bracket notation 

// // console.log(emp.id)
// // console.log(emp['salary'])

// emp.city = 'Delhi'
// emp['country'] = 'India'

// console.log("Old object", emp)
// // Update data
// // emp.name = "Pritam";
// // emp.city = "Mumbai";
// // console.log("Updata object", emp)

// delete emp.city
// delete emp['country']
// console.log("Updata object", emp)

// Output:
// Old object {      
//     id: 40,
//     name: 'Alex',   
//     salary: 40000,  
//     city: 'Delhi',  
//     country: 'India'
//   }
//   Updata object { id: 40, name: 'Alex', salary: 40000 }

// Iterating

let emp = {id: 40, name: 'Alex', salary: 40000}; 

// console.log(emp.id)
// console.log(emp['salary'])

emp.city = 'Delhi'
emp['country'] = 'India'

// console.log("Old object", emp)

// for ( const key in emp){
//     // console.log(key)
//     // Output:
//     // id
//     // name   
//     // salary 
//     // city   
//     // country

//     console.log(key,emp[key])
// }
// Output:
// id 40
// name Alex   
// salary 40000
// city Delhi  
// country India

for ( const value of emp){
    console.log(value)
}
// Output:
// TypeError: emp is not iterable