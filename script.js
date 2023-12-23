let generateBtn = document.querySelector("#generate");

function randomint(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  let rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}


function getrandomitem(list) {
  return list[randomint(list.length)]
}

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

    let numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", "'", ",", "<", ".", ">", "/", "?"]

    let password = []

    if (numbers === true) {
      password.push(numbersList)
    }
    if (lowercase ===  true) {
      password.push(lowercaseList)
    }
    if (uppercase === true) {
      password.push(uppercaseList)
    }
    if (symbol === true) {
      password.push(symbolsList)
    }

    let generatedPassword = ""

  }