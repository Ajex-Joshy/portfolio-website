function validateForm() {
    let isValid = true
    let name = document.getElementById("name-field").value
    let email = document.getElementById("email-field").value
    let subject = document.getElementById("subject-field").value
    let message = document.getElementById("message-field").value
    console.log(subject)

    document.getElementById("nameError").innerText = ""
    document.getElementById("emailError").innerText = ""
    document.getElementById("subjectError").innerText = ""
    document.getElementById("messageError").innerText = ""

    if (!/^[A-Za-z\s]{2,}$/.test(name)) {
        isValid = false
        document.getElementById("nameError").innerText = "Please enter a valid name"
    }
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,10}$/.test(email)) {
        isValid = false
        document.getElementById("emailError").innerText = "Please enter a valid email address"
    }
    if (!/^.{3,}$/.test(subject)) {
        isValid = false
        document.getElementById("subjectError").innerText = "Subject must be at least 3 characters long"
    }
    if (!/^.{10,}$/.test(message)) {
        isValid = false
        document.getElementById("messageError").innerText = "Message must be at least 10 characters long"
    }
    return isValid

}

