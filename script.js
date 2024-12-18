const su = document.querySelector(".choice-card:nth-of-type(1)");
const gg = document.querySelector(".choice-card:nth-of-type(2)");
const castillo = document.querySelector(".choice-card:nth-of-type(3)");
const guney = document.querySelector(".choice-card:nth-of-type(4)");
const dunn = document.querySelector(".choice-card:nth-of-type(5)");
const williams = document.querySelector(".choice-card:nth-of-type(6)");
const cardElement = document.querySelectorAll(".card");
const headertext = document.getElementById("header")
function generate(tlist) {
    cardElement.forEach(cardElement => {
        const randomIndex = Math.floor(Math.random() * tlist.length);
        cardElement.textContent = tlist[randomIndex];
    });
};

function headertxt(txt) {
    headertext.textContent = txt;
};

const ggChoices = [
    "too bad too sad",
    "no its the last 10 minutes",
    "5 minutes left guys",
    "shaayan sit down",
    "what the hecoroni ponies",
    "benjamin sit down",
    "jenish tuck in your shirt"
    
]
const suChoices = [
    "hey guys focus", 
    "aleks only please",
    "ten topics guys ten topics",
    "cool cool",
    "*slams ruler*",
    "*smiles suspiciously at phone*",
    "*smiles suspiciously at laptop*",
    "*hangs out at the door*",
    "lemme give you RP",
    "who is that talking",
    "how many topics you did?",
    "*gives esther rp*",
    "STOP TALKING GUYS",
    "that is rp for you okay?",
    "*wears airpods*",
    "*stares at students*",
    "Tahsin do you want rp?",
    "I am the king of the classroom",
    "*looks at bitcoin rising",
];

current_teacher = "gg";
// Populate cards with random choices
cardElement.forEach(cardElement => {
    const randomIndex = Math.floor(Math.random() * suChoices.length);
    cardElement.textContent = suChoices[randomIndex];

    // Add click event listener
    cardElement.addEventListener("click", () => {
        cardElement.classList.toggle("freecard");
    });
});

function listen() {
    cardElement.addEventListener("click", () => {
        cardElement.classList.toggle("freecard");
    });
};
function tog() {
    cardElement.classList.toggle("freecard");
}

su.addEventListener('click', () => {
   generate(suChoices);
   headertxt("the super aleks bingo time")
   
});
gg.addEventListener('click', () => {
   generate(ggChoices);
   headertxt("do ur newsela now")
   listen();
   tog();
});

