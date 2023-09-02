// Prob 3. Imagine you are given a list of student objects, each containing the student's name and their marks. Your task is to create a function that checks results by filtering out students whose score is more than 90 and prints a message saying, "Congratulations [Student Name]! You have cleared the exam."

const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 90,
    },
];

const checkResults = (name) => {
    for (let student of students) {
        if (student.name === name) {
            return student.marks > 90
            ? console.log (
                `Congratulations ${student.name}! You hava cleared the exam.`
            )
            : console.log(`Sorry ! You hava note cleared the exam.`);
        }
    }
    console.log("Invalid User !!!");
};

checkResults("Mithun");
// Output: Congratulations Mithun! You hava cleared the exam.

checkResults("Prabir");
// Output: Sorry ! You hava note cleared the exam.

checkResults("Prakash");
// Output: Invalid User !!!