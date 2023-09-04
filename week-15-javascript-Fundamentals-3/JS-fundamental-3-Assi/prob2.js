// Prob 2. Define an object that represents a student's information including name, age, and grade. Implement a method to update the student's grade.

const student = {
    name: "Pritam",
    age: 23,
    grade: "A"
};

function updateGrade(newGrade) {
    student.grade = newGrade;
}

updateGrade("B")
console.log(student);

// Output:
// { name: 'Pritam', age: 23, grade: 'B' }
