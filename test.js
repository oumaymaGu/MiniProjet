function nameValidation() {
    if (lNameInput.value.length < 3) {
        lNameError = " Le nom doit compter au minimum 3 caractères.";
        document.getElementById("name").innerHTML = lNameError;

        return false;
    }
    if (!lNameInput.value.match(letters)) {
        lNameError2 = "Veuillez entrer un nom valid ! (seulement des lettres)";
        lNameValid2 = false;
        document.getElementById("name").innerHTML = lNameError2;
        return false;
    }
    document.getElementById("name").innerHTML =
        "<p style='color:green'> Correct </p>";

    return true;

    document.forms["formulaire"].addEventListener("Envoyer", function (e) {
    var inputs = document.forms["formulaire"];
    let ids = [
        "name",
        
    ];
}