const balanceEl = document.getElementById("balance")
const incomeAmount = document.getElementById("income-amount")
const expensesAmount = document.getElementById("expenses-amount")
const transactionList = document.getElementById("transaction-list")
const transactionForm = document.getElementById("transaction-form")
const descriptionEl = document.getElementById("description")
const amountEl = document.getElementById("amount")

let transactions = JSON.parse(localStorage.getItem("transactions")) || []

transactionForm.addEventListener("submit", addTransaction)

function addTransaction(e){
    e.preventDefault()

    const description = descriptionEl.ariaValueMax.trim()
    const amount = parseFloat(amountEl.value)

    transactions.push([])
}


