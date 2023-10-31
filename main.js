/* email checker */

const authorizedMail = ["ginopilotino@gmail.com", "fabbricadeimostri@gig.com", "emiglio@robot.com", "powerranger@blu.com"];
console.log("list", authorizedMail);

const button = document.getElementById("button");
const checkResult = document.querySelector("h5");

button.addEventListener("click", function () {
    const emailInput = document.getElementById("emailInput").value;
    for (let i = 0; i < authorizedMail.length; i++) {
        const element = authorizedMail[i];
    }
    if (authorizedMail.includes(emailInput)) {
        checkResult.classList = "text-success";
        checkResult.innerHTML = "Accesso autorizzato!";
    }
    else if (!emailInput.includes("@")) {
        checkResult.classList = "text-danger";
        checkResult.innerHTML = "not an email";
    }
    else {
        checkResult.innerHTML = "non autorizzato";
    }
})


/* lancio dadi */

const diceButton = document.getElementById("dice-button");
const yourRoll = document.getElementById("your-roll");
const pcRoll = document.getElementById("pc-roll");
const gameOutcome = document.getElementById("game-outcome");
const diceSound = document.getElementById("diceSound");


diceButton.addEventListener('click', function() {
    diceSound.play();
    let randomDice = Math.floor(Math.random() * 6 + 1);
    yourRoll.innerHTML = randomDice;
    randomDice = Math.floor(Math.random() * 6 + 1);
    pcRoll.innerHTML = randomDice;

    if (yourRoll.innerHTML > pcRoll.innerHTML) {
        gameOutcome.innerHTML = "Hai Vinto!";
        gameOutcome.classList = "text-success";
    }

    else if (yourRoll.innerHTML < pcRoll.innerHTML) {
        gameOutcome.innerHTML = "Hai Perso!";
        gameOutcome.classList = "text-danger";
    } 
    
    else {
        gameOutcome.innerHTML = "Pareggio!";
        gameOutcome.classList = "";

    }
})

