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

generateBtn.addEventListener("click", generatePassword)

function generatePassword(){
    let length = Number(lengthSlider.value)

    const includeUppercase = uppercaseCheckbox.checked
    const includeLowercase = lowercaseCheckbox.checked
    const includeNumbers = numbersCheckbox.checked
    const includeSymbols = symbolsCheckbox.checked

    if(!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols){
        alert("Please select at least one char type.")
        return
    }

    const newPassword = createRandomPassword(
        length, includeUppercase,includeLowercase, includeNumbers, includeSymbols
    )

    passwordInput.value = newPassword
    updateStrengthMeter(newPassword)
}

function updateStrengthMeter(password){
    const passwordLength = password.length
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumbers = /[0-9]/.test(password)
    const hasSymbols = /[!@#$%^&*()-_=+[]{}|;:,.<>?]/.test(password)

    let strengthScore = 0

    strengthScore += Math.min(passwordLength*2, 40)

    if(hasUppercase) strengthScore += 15
    if(hasLowercase) strengthScore += 15
    if(hasNumbers) strengthScore += 15
    if(hasSymbols) strengthScore += 15

    if(passwordLength< 8){
        strengthScore = Math.min(strengthScore, 40)
    }
    
    const safeScore = Math.max(5, Math.min(100, strengthScore))

    strengthBar.style.width = safeScore + "%"

    let strengthLabelText = ""
    let barColor= ""

    if(strengthScore < 40){
        barColor = "#fc8181"
        strengthLabelText = "Weak"
    }
    else if(strengthScore < 70){
        barColor = "#fbd38d"
        strengthLabelText = "Medium"
    }
    else{
        barColor = "#68d391"
        strengthLabelText = "Strong"
    }

    strengthBar.style.backgroundColor = barColor
    strengthLabel.textContent = strengthLabelText
}

function createRandomPassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
){
    let characterSet=""
    let password = ""

    if(includeUppercase) characterSet += uppercaseLetters
    if(includeLowercase) characterSet += lowercaseLetters
    if(includeNumbers) characterSet += numberCharacters
    if(includeSymbols) characterSet += symbolCharacters

    for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * characterSet.length)
        password += characterSet[randomIndex]
    }
    return password
}

window.addEventListener("DOMContentLoaded", generatePassword)

copyBtn.addEventListener("click", ()=>{
    if(passwordInput.value){
        navigator.clipboard.writeText(passwordInput.value)
        .then(()=> showCopySuccess())
        .catch((error) => console.log("Could not copy:", error))
    }
    else{
        alert("Please generate a password first!")
    }
})

function showCopySuccess(){
    copyBtn.classList.remove("far", "fa-copy")
    copyBtn.classList.add("fas", "fa-check")
    copyBtn.style.color = "#48bb78"

    setTimeout(()=>{
        copyBtn.classList.remove("fas", "fa-check")
        copyBtn.classList.add("far", "fa-copy")
        copyBtn.style.color = ""
    },1500)
}

