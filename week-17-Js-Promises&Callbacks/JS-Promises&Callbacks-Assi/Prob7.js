// 7. Multiple requests.

// Create an asynchronous function that retrieves data from two different API endpoints: "https:// jsonplaceholder.typicode.com/todos/l" and "https://jsonplaceholder.typicode.com/posts/r. The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs.

async function getcombinedData() {
    const [data1, data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()),
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()),
    ]);

    const combinedData = {
        todo: data1,
        post: data2,
    };
    return combinedData;
}

getcombinedData().then((data) => console.log(data));

// OutPut

// {
//     todo: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
//     post: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// }