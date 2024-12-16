// Define the array of choices
const choices = ["hey guys focus", 
    "aleks only please",
    "ten topics guys ten topics",
    "wow thats cool",
    "*slams ruler*",
    "*smiles suspiciously at phone*",
    "smiles suspiciously at laptop*",
    "*hangs out at the door*",
    "lemme give you RP",
    "who is that talking",
    "how many topics you did?",
    "*gives esther rp*"  // Added new response
    ];

// Get all the card elements
const cardElements = document.querySelectorAll(".card");

// Add an event listener to each card element
cardElements.forEach(cardElement => {
// Generate a random index
const randomIndex = Math.floor(Math.random() * choices.length);

// Set the card text to a random choice
cardElement.textContent = choices[randomIndex];

// Add a click event listener to the card element
cardElement.addEventListener("click", () => {
// Toggle the red and crossed-out styles
cardElement.classList.toggle("red-crossed-out");
});
});

// Add CSS styles for the red and crossed-out styles
const style = document.createElement("style");
style.innerHTML = `
.red-crossed-out {
background-color: red;
text-decoration: line-through;
}

.red-crossed-out:hover {
background-color: red;
text-decoration: line-through;
}
`;
document.head.appendChild(style);
