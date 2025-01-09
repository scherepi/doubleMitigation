// This script is just a detachment of the JavaScript in the mitigated.html file.
var buttons = document.querySelectorAll('button')
// First, we disable every button, then we define a function we'll call later to bring them back.
buttons.forEach(button => button.disabled = true) 
function enableButtons() { buttons.forEach(button => button.disabled = false)}
// Then we add a quick event listener to wait for the user to hit the "w" key - once they do, we re-enable our buttons.
document.addEventListener("keydown", function(e) { if (e.key === "w") { enableButtons(); }});
