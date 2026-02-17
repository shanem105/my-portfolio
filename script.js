/* script.js */
const text = "IT Operations | Endpoint Security | Network Defense";
const speed = 50; 
let i = 0;

function typeWriter() {
    const element = document.getElementById("typewriter");
    if (element && i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;