let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString()) // Converts array to comma-separated string
console.log(arr.join(" and ")) // Joins array elements with ' and ' as separator


let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    // Removes 2 elements from index 1: [1, 4, 5]
numbers.splice(1, 3)    // Removes 3 elements from index 1: [1, 5]
numbers.splice(1, 3, 222, 333) // Removes 3 from index 1, inserts 222, 333: [1, 222, 333, 5]
(4) [1, 222, 333, 5]

// ---
// Array method explanations:
// toString(): Converts array to comma-separated string
// join(separator): Joins array elements with the given separator string
// splice(start, deleteCount, ...items): Removes/replaces/adds elements in place
//   - start: index to start
//   - deleteCount: how many to remove
//   - ...items: items to add at start position
// slice(start, end): Returns a shallow copy of a portion of the array (does not modify original)
//   - start: index to start (inclusive)
//   - end: index to end (exclusive)