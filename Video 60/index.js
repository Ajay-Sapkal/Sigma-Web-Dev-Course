console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)

// ---
// String functions used above:
// length         - Returns the length of the string
// toUpperCase()  - Converts string to uppercase
// toLowerCase()  - Converts string to lowercase
// slice(start, end) - Returns substring from start to end (end not included)
// replace(str1, str2) - Replaces first occurrence of str1 with str2
// concat(...strings)  - Concatenates multiple strings together
// Template literals (`...${var}...`) - Embed variables/expressions in strings
//
// Other useful string functions:
// charAt(index)      - Returns the character at the specified index
// charCodeAt(index)  - Returns the Unicode of the character at the index
// includes(str)      - Checks if string contains str (returns true/false)
// startsWith(str)    - Checks if string starts with str
// endsWith(str)      - Checks if string ends with str
// indexOf(str)       - Returns the first index of str, or -1 if not found
// lastIndexOf(str)   - Returns the last index of str, or -1 if not found
// trim()             - Removes whitespace from both ends
// split(separator)   - Splits string into array by separator
// repeat(count)      - Returns the string repeated count times
