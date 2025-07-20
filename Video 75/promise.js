console.log('This is Promises');

// Create a new Promise (prom1)
// The executor function runs immediately and receives resolve and reject functions
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random(); // Generate a random number between 0 and 1
    if (a < 0.5) {
        // If random number is less than 0.5, reject the promise immediately
        reject("No random number was not supporting you")
    }
    else {
        // Otherwise, after 3 seconds, resolve the promise
        setTimeout(() => {
            console.log("Yes I am done") // Log to show the async operation finished
            resolve("Harry") // Resolve the promise with value "Harry"
        }, 3000);
    }
})


// Create another Promise (prom2) with similar logic but different timeout and messages
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Key points:

// A Promise can be in one of three states: pending, fulfilled (resolved), or rejected.
// You create a Promise using new Promise((resolve, reject) => { ... }).
// resolve is called when the operation is successful.
// reject is called when the operation fails.
//  prom1 and prom2 are Promises that either resolve after a timeout or reject immediately, based on a random number.
 
let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
//This code uses Promise.race to work with multiple promises:

// Promise.race([prom1, prom2]) creates a new promise (p3) that settles as soon as either prom1 or prom2 settles (resolves or rejects), whichever happens first.
// If the first promise to settle is resolved, p3 will resolve with that value.
// If the first promise to settle is rejected, p3 will reject with that error.
// The .then() block runs if p3 resolves, logging the resolved value (a).
// The .catch() block runs if p3 rejects, logging the error (err).

