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
        checkResult.innerHTML = "Accesso autorizzato!"
    }
    else if (!emailInput.includes("@")) {
        checkResult.classList = "text-danger";
        checkResult.innerHTML = "not an email"
    }
    else {
        checkResult.innerHTML = "non autorizzato"
    }
})



