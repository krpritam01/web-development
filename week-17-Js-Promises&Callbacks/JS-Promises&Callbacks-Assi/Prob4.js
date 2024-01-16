// 4. Arrange in alphabetical order.

// Write a program that accepts a list of objects representing books [title, author, and year and a callback function. The program should use the map function to create a new list containing only the titles of the books. and then pass this new list to the callback function. The callback function should then log the titles to the

// console in alphabetical order.

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
    },
    {
        title: "Harry Potter and the Philosopher's Stone (or Harry Potter and the Sorcerer's Stone in the U.S.)",
        author: "J.K. Rowling",
        year: 1997,
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        year: 1954,
    },
];

function logTitles(titles) {
    titles.sort();
    console.log(titles.join(", "));
}

function extractTitles(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles);
}

extractTitles(books, logTitles);

//OutPut

//Harry Potter and the Philosopher's Stone (or Harry Potter and the Sorcerer's Stone in the U.S.), The Catcher in the Rye, The Great Gatsby, The Lord of the Rings: The Fellowship of the Ring, To Kill a Mockingbird