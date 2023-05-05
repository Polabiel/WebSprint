function alertMessage() {
    if (document.getElementById("nome-box").value == "" || document.getElementById("email-box").value == "") {
        return
    }
    else {
        alert("Obrigado por se inscrever!");
    }
}