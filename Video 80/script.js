// Example of prototypal inheritance 
// let animal = {
//     eats: true;
// }
// let rabbit =  {
//     jumps: true
// };
// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// Define a base class Animal
class Animal{
    constructor(name){
        this.name = name // Set the name property
        console.log("Object is created...") // Log when object is created
    }

    eats(){
        console.log("Kha raha hoon") // Animal eats
    }
    jumps(){
        console.log("Kood raha hoon") // Animal jumps
    }
}

// Define a subclass Lion that extends Animal
class Lion extends Animal {
    constructor(name){
        super(name) // super: calls the parent class constructor, must be called before using 'this' in subclass
        console.log("Object is created and he is a lion...") // Log for Lion
    }

    // Override the eats method (OOP: method overriding)
    eats(){
        super.eats() // super.method(): call the parent class method from subclass
        console.log("Kha raha hoon roar") // Lion-specific message
    }
}

// Create an Animal object (OOP: object instantiation)
let a = new Animal("Bunny");
console.log(a)

// Create a Lion object (inherits from Animal)
let l = new Lion("Shera")
console.log(l)

