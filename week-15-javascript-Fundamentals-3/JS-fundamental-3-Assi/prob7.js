// Prob 7. Build a program that utilizes a Map to store user information (name, age, email) and allows adding. updating, and deleting user records

const userMap = new Map();

function addUsar(name, age, email) {
    const userInfo = {age, email};
    userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
    if(userMap.has(name)) {
        const userInfo = userMap.get(name);
        userInfo.age = age;
        userInfo.email = email;
    }
}

function deleteUsar(name) {
    userMap.delete(name);
}

addUsar("pritam", 23, "example@gmail.com");
addUsar("kamlesh", 22, "example1@gmail.com");
console.log(userMap);

updateUser("pritam", 24, "p=krexample@gmail.com");
console.log(userMap);

deleteUsar("kamlesh");
console.log(userMap);

// Output:
// Map(2) {
//     'pritam' => { age: 23, email: 'example@gmail.com' },
//     'kamlesh' => { age: 22, email: 'example1@gmail.com' }
//   }
//   Map(2) {
//     'pritam' => { age: 24, email: 'p=krexample@gmail.com' },
//     'kamlesh' => { age: 22, email: 'example1@gmail.com' }
//   }
//   Map(1) { 'pritam' => { age: 24, email: 'p=krexample@gmail.com' } }