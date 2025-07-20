
let button = document.getElementById("btn") // Get button by id

// List of all mouse events: https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// Double click event on button
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!" // Change box content
})

// Right-click (context menu) event on button
button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please") // Show alert on right click
})

// Keydown event on whole document
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode) // Log event, key, and keyCode
})