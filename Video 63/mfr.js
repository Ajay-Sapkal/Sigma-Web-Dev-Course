let arr = [1, 13, 5 ,7, 11];

// Example of squaring each element using a for loop (commented out)
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

// map: creates a new array by applying a function to each element
// Here, squares each element of arr
let newArr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr) // [1, 169, 25, 49, 121]

// filter: creates a new array with elements that pass the test in the callback
// Here, keeps only elements greater than 7
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven)) // [13, 11]

// Another array for reduce example
let arr2 = [1,2,3,4,5,6]

// reduce: reduces the array to a single value by applying a function
// Here, sums all elements of arr2
const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red)) // 21