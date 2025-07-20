
// Example of an async function returning a Promise (commented out)
// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// Promise terminology:
// settle: when a promise is either resolved or rejected
// resolve: promise completed successfully
// reject: promise failed


// Async function to fetch data from a server using fetch API
async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    // POST request to a test API with JSON body and headers
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json() // Parse response as JSON
    return data // Return the parsed data
}


// Main async function to demonstrate sequential async/await flow
async function main(){
    console.log("Loading modules") // Step 1
    console.log("Do something else") // Step 2
    console.log("Load data") // Step 3

    let data = await getData() // Wait for getData to finish

    console.log(data) // Log the fetched data
    console.log("process data") // Step 4
    console.log("task 2") // Step 5
}

main() // Start the main function

