const form = document.getElementById("form-registration")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const awesomeBtn = document.getElementById("awesome-btn")
const modalOverlay = document.querySelector(".modal-overlay")

form.addEventListener("submit", function(e){
    e.preventDefault()

    const isRequiredValid = checkRequired([username,email,password, confirmPassword])

    let isFormValid = isRequiredValid

    if(isRequiredValid){
        const isUsernamevalid = checkLength(username, 3, 15)
        const isEmailValid = checkEmail(email)
        const isPasswordValid = checkLength(password, 6, 25)
        const isCPasswordValid = checkPasswordsMatch(password,confirmPassword)

        isFormValid = isUsernamevalid && isEmailValid && isPasswordValid && isCPasswordValid
    }

    if(isFormValid){
        modalOverlay.classList.add("active")
    }
})

awesomeBtn.addEventListener("click", function(){
    modalOverlay.classList.remove("active")

    form.reset()

    document.querySelectorAll(".form-group").forEach((group)=>{
        group.className = "form-group"
    })
})

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${formatFieldName(input)} must be at least ${min} characters.`)
        return false
    }
    else if(input.value.length > max){
        showError(input, `${formatFieldName(input)} must be less than ${max} characters.`)
        return false
    }
    else{
        showSuccess(input)
        return true
    }
}

function checkEmail(email){
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailRegx.test(email.value.trim())){
        showSuccess(email)
        return true
    }
    else{
        showError(email, "Email is not valid!")
        return false
    }
}

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords do not match")
        return false
    }
    return true
}

function checkRequired(inputArray){
    let isValid = true

    inputArray.forEach(input => {
        if(input.value.trim() === ""){
            showError(input, ` ${formatFieldName(input)} is required`)
            isValid = false
        }
        else{
            showSuccess(input)
        }
    });

    return isValid
}

function formatFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function showError(input, message){
    const formGroup = input.parentElement
    formGroup.className = "form-group error"

    const smallEl = formGroup.querySelector("small")
    smallEl.innerText = message
}

function showSuccess(input){
    const formGroup = input.parentElement
    formGroup.className = "form-group success"
}
