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
                "new response"  // Added new response
                ];

// Get all the card elements
const cardElements = document.querySelectorAll(".card");

// Iterate over each card element
cardElements.forEach(cardElement => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Set the card text to a random choice
    cardElement.textContent = choices[randomIndex];
});