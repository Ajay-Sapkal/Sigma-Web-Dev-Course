console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})

// ---
// Common ways to select DOM elements:
// document.getElementById("id")            // Selects element by id
// document.getElementsByClassName("class")  // All elements with class (HTMLCollection)
// document.getElementsByTagName("tag")      // All elements with tag (HTMLCollection)
// document.querySelector("selector")        // First element matching CSS selector
// document.querySelectorAll("selector")     // All elements matching CSS selector (NodeList)