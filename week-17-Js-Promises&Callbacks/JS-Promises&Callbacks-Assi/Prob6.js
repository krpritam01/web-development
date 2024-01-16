// 6. Fetch results asynchronously.

// Write a function that asynchronously fetches data from an API https://jsonplaceholdertypicode.com/todos/1 land logs the result to the console

async function fetchData() {
    const response = await
fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
}

fetchData();


// OutPut

// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }