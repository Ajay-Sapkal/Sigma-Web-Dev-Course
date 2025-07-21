// Prompt user for two numbers (input is always string)
let a = prompt("Enter first number")
let b = prompt("Enter second number")

// Check if input is not a number, throw a SyntaxError if so
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

// Convert input strings to integers and add them
let sum = parseInt(a) + parseInt(b)

// Function to demonstrate try-catch-finally
function main(){ 
    let x = 1;
    try {
        // Try to print the sum (could throw if sum or x is not a number)
        console.log("The sum is ", sum * x)
        return true
    } catch (error) {
        // If error occurs, print message and return false
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{
        // finally is used for cleanup code that must run no matter what
        // Even if try or catch has a return statement, finally will always run
        // This is important when try-catch is inside a function: code after return in try/catch won't run, but finally will
        // If you don't use finally, cleanup code after return will never execute
        // Useful for closing files, releasing resources, or logging
        console.log("files are being closed and db connection is being closed")
    }
}

let c = main() // Call the function and store the result


