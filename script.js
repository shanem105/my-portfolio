/* script.js */

// Core Skills
const text = "Network Defense | Infrastructure Hardening | Traffic Analysis";

// speed in ms
const speed = 50; 

let i = 0;

function typeWriter() {
    // Look for the element with id="typewriter" in HTML
    const element = document.getElementById("typewriter");
    
    // Only run if the element exists and we haven't finished typing
    if (element && i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start the function when the window loads
window.onload = typeWriter;