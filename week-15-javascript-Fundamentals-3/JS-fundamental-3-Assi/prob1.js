// Prob 1. Create an object representing a car with properties like "make," "model," and "year." Write a function to display all the properties of the car.

const car ={
    make: "Tata",
    model: "Safari",
    year: 1998
};

function displayCarProperties(car){
    for (const proerty in car){
        console.log(`${proerty} : ${car[proerty]}`);
    }
}

displayCarProperties(car);

// Output:
// make : Tata
// model : Safari
// year : 1998   