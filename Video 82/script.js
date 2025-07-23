
// Logs the value of a1 (will be undefined due to hoisting, as var a1 is declared later)
console.log(a1);



// IIFE (Immediately Invoked Function Expression) with async for using await inside
(async function main(){ 
    // Example: Awaiting a promise (commented out)
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b);

    // Example: Array destructuring (commented out) 
    // let [x, y, rest] = [1, 5, 7, 8, 9, 10]
    // console.log(x, y, rest)

    // Object destructuring: extracts a and b from obj
    let obj = {
        a: 1, 
        b: 2,
        c: 3
    }

    let {a, b} = obj
    console.log(a, b) // 1 2

    // Array usage and spread operator
    let arr = [1, 4, 6]
    // Calls sum with individual elements
    console.log(sum(arr[0], arr[1], arr[2]))
    // Calls sum using spread operator (same as above)
    console.log(sum(...arr))

    // Note: sum is async, so these log promises, not results
    // To get the result, use: console.log(await sum(...arr))
    
})()


// Variable declaration (hoisted, so available above but value is undefined until here)
var a1 = 6;



// Async function that returns a promise resolved after 1 second
const sleep = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}


// Async sum function (returns a promise with the sum)
const sum = async (a, b, c)=>{
    return a+b+c
}