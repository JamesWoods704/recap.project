let generateBtn = document.querySelector("#generate");

function generatepassword() {
    let Input = prompt("how many characters do you want in your password")
    let length = parseInt(Input)

    if (isNaN(length)) {
        alert("Not a number")
        return generatepassword()
    }
    if (length < 8) {
        alert("less than 8 characters")
        return generatepassword()
    }
    if (length > 128) {
        alert("greater than 128 characters")
        return generatepassword()
    }

    let numbers = confirm("do you want a number")
    let lowercase = confirm("do you want lowercase")
    let uppercase = confirm("do you want uppercase")
    let symbol = confirm("do you want a symbol")
}

