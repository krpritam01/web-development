let emp = {
    id: 101,
    name: 'Pritam',
    age: 23
};

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

Object.seal(emp);
emp.id = 100;
// emp.address = 'random';
console.log(emp);

let o = Object.assign({}, emp);
console.log(o);