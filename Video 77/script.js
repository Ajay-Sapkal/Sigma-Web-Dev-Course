// Function to create a video card with given parameters
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Format view count for display
    let viewStr
    if (views < 1000) {
        viewStr = views; // Display as is for small numbers
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M"; // Convert to millions
    }
    else {
        viewStr = views / 1000 + "K"; // Convert to thousands
    }
    // Create HTML structure for the video card
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    // Add the card HTML to the container
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

// Call the function to create a video card
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw") 