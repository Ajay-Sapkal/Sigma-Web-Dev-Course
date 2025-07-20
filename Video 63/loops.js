let a = [1, 93, 5, 6, 88]

// Traditional for loop: iterate using index
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

// forEach loop: iterate over array elements with a callback
// Provides value, index, and the array itself
a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

// for...in loop: iterate over object keys (properties)
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; 
        console.log(key, element)
    }
}

// for...of loop: iterate over iterable objects (like arrays)
for (const value of a) {
    console.log(value)
}