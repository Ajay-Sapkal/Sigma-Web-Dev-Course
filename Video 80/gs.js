// Define a User class with getter and setter for name
class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    // Getter for name property
    get name() {
      return this._name;
    }
  
    // Setter for name property with validation
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John"); // Creates user, sets name via setter
  console.log(user.name); // John (getter is called)
  
    user.name = "Harry" // Name is too short. (setter validation fails)
  console.log(user.name) // Still John, as name was not updated