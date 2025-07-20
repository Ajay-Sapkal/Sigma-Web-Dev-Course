
// Logging to show synchronous execution
console.log("Harry is a hacker") // This runs first
console.log("Rohan is a hecker") // This runs second

// setTimeout schedules a function to run after the current call stack is empty (asynchronously)
setTimeout(() => {
    console.log("I am inside settimeout") // This runs after all synchronous code, even with 0ms delay
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2") // This also runs after synchronous code
}, 0);

console.log("The End") // This runs before setTimeout callbacks, showing event loop behavior

// A simple function to demonstrate callbacks
const fn = () => {
  console.log("Nothing") // This logs when called by the callback function
}

// A callback function: takes an argument and another function, logs the argument, then calls the function
const callback = (arg, fn) => {
    console.log(arg) // Logs the argument passed
    fn() // Calls the function passed as argument
}

// Function to dynamically load a script and call a callback when loaded
const loadScript = (src, callback) => {
    let sc = document.createElement("script"); // Create a new <script> element
    sc.src = src; // Set the script source
    // The following line calls callback immediately, not when the script loads (for teaching purpose)
    // In real code, use: sc.onload = () => callback("Harry", fn);
    sc.onload = callback("Harry", fn); // Calls callback right now, not on load
    document.head.append(sc) // Add the script to the document to start loading
}

// Call loadScript to demonstrate dynamic script loading and callback usage
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )