// Array of choices
const choices = [
    "hey guys focus", 
    "aleks only please",
    "ten topics guys ten topics",
    "wow thats cool",
    "*slams ruler*",
    "*smiles suspiciously at phone*",
    "*smiles suspiciously at laptop*",
    "*hangs out at the door*",
    "lemme give you RP",
    "who is that talking",
    "how many topics you did?",
    "*gives esther rp*"
];

// Populate cards with random choices
const cardElements = document.querySelectorAll(".card");
cardElements.forEach(cardElement => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    cardElement.textContent = choices[randomIndex];

    // Add click event listener
    cardElement.addEventListener("click", () => {
        cardElement.classList.toggle("freecard");
    });
});
