let obj = {id: 101, name: "Pritam", salary: 100000};
console.log(obj);



let emp = new Object();
emp.id = 102;
emp.name = "Kumar";
emp.salary = 15000;
console.log(emp);


function Emp(i, n, s) {
    this.id = i;
    this.name = n;
    this.salary = s
}

const e = new Emp(103, "Aryan", 200000);
console.log(e);

// Access data 

console.log(emp.id);
console.log(emp['name']);

// Assign New Value

emp.id = 13;
emp['name'] = 'mr. Kumar'

console.log(emp);

// Delate value

delete emp.id;
console.log(emp);