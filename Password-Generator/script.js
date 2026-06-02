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
const strengthText = document.querySelector("strength-container p")
const strengthLabel = document.getElementById("strength-label")

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const numberCharacters = "0123456789"
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";
