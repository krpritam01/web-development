// Prob 4. Develop a program that accepts an object and a property.name, and checks if the object has the specified property.

function hasPropery(obj, PropertyName) {
    return obj.hasOwnProperty(PropertyName);
}

const exampleObject = {name: "Pritam", age: 25};
console.log(hasPropery(exampleObject, "age"));  // true
console.log(hasPropery(exampleObject, "email")); // false

// Output:
// true
// false