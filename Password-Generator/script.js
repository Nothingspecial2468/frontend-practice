const passwordInput = document.getElementById("password")
const copyBtn = document.getElementById("copy-btn")
const lengthSlider = document.getElementById("length")
const lengthValue = document.getElementById("length-value")
const uppercaseCheckbox = document.getElementById("uppercase")
const lowercaseCheckbox = document.getElementById("lowercase")
const numbersCheckbox = document.getElementById("numbers")
const symbolsCheckbox = document.getElementById("symbols")
const generateBtn = document.getElementById("generate-btn")
const strengthBar = document.querySelector(".strength-bar")
const strengthText = document.querySelector(".strength-container p")
const strengthLabel = document.getElementById("strength-label")

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const numberCharacters = "0123456789"
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

lengthSlider.addEventListener("input", ()=>{
    lengthValue.textContent = lengthSlider.value
})

generateBtn.addEventListener("click", ()=>{
    let characterSet = ""

    if(uppercaseCheckbox.checked) characterSet += uppercaseLetters
    if(lowercaseCheckbox.checked) characterSet += lowercaseLetters
    if(numbersCheckbox.checked) characterSet += numberCharacters
    if(symbolsCheckbox.checked) characterSet += symbolCharacters

    passwordInput.value = generatePassword(lengthSlider.value, characterSet)
})

function generatePassword(length, characterSet){
    let password = ""

    for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * characterSet.length)
        password += characterSet[randomIndex]
    }
    return password
}

copyBtn.addEventListener("click", ()=>{
    if(passwordInput.value){
        navigator.clipboard.writeText(passwordInput.value)
    }
    else{
        alert("Please generate a password first!")
    }
})