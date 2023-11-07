const books = [
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        Year: 2010,
    },
    {
        title: "The God of Small Things",
        author: "Arundhati Roy",
        Year: 1997,
    },
    {
        title: "A Suitable Boy",
        author: "Vikram Seth",
        Year: 1993,
    },
    {
        title: "The White Tiger",
        author: "Aravind Adiga",
        Year: 2018,
    },
    {
        title: "Midnight's Children",
        author: "Salman Rushdie",
        year: 1981,
    },
];

const filterebooks = books.filter((book) => {
    return book.Year >= 2010;
})

const result = filterebooks.map((book) => {
    return {
        ...book,
        author: book.author.toUpperCase(),
    };
});

console.log(result);

/*
OUTPUT:
[
    { title: 'The Namesake', author: 'JHUMPA LAHIRI', Year: 2010 },
    { title: 'The White Tiger', author: 'ARAVIND ADIGA', Year: 2018 }
  ]
*/