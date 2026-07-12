const taskInput = document.getElementById('todo-input')
const addTaskButton = document.getElementById('add-button')
const taskList = document.getElementById('todo-list')
const clearCompletedButton = document.getElementById('clear-completed')
const filters = document.querySelectorAll('.filter')
const itemsleft = document.getElementById('items-left')
const emptyState = document.querySelector('.empty-state')
const dateElement = document.getElementById('date')

let tasks = []
let currentFilter = 'all'

addTaskButton.addEventListener('click', () => {
    console.log("Button clicked")
    addTask(taskInput.value)
})

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask(taskInput.value)
    }
})

clearCompletedButton.addEventListener('click', clearCompletedTasks)

function addTask(taskText) {
    if(taskText.trim() === '') return

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    }

    tasks.push(task)
    saveTasks()
    renderTasks()
    taskInput.value = ""
}

function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
    updateTaskCount()
    checkEmptyState()
}

function updateTaskCount() {
    const uncompletedCount = tasks.filter(task=> !task.completed)
    itemsleft.textContent = `${uncompletedCount.length} item${
        uncompletedCount.length !== 1 ? 's' : ''
    } left`
}

function checkEmptyState(){
    const filteredTasks = filterTasks(currentFilter)

    if(filteredTasks.length === 0) {
        emptyState.classList.remove('hidden')
    }
    else {
        emptyState.classList.add('hidden')
    }
}

function filterTasks(filter) {
    switch(filter){
        case 'active':
            return tasks.filter(task => !task.completed)
        case 'completed':
            return tasks.filter(task=> task.completed)
        default:
            return tasks
    }
}

function renderTasks(){
    taskList.innerHTML =''

    const filteredTasks = filterTasks(currentFilter)

    filteredTasks.forEach(task => {
        const taskItem = document.createElement('li')
        taskItem.classList.add('todo-item')

        if(task.completed){
            taskItem.classList.add('completed')
        }

        const checkboxContainer = document.createElement('label')
        checkboxContainer.classList.add('checkbox-container')

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add('todo-checkbox')
        checkbox.checked = task.completed
        checkbox.addEventListener('change', ()=> toggleTask(task.id) )

        const checkmark = document.createElement('span')
        checkmark.classList.add('checkmark')

        checkboxContainer.appendChild(checkbox)
        checkboxContainer.appendChild(checkmark)

        const taskText = document.createElement('span')
        taskText.classList.add('todo-item-text')
        taskText.textContent = task.text

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.innerHTML = `<i class="fas fa-times"></i>`
        deleteBtn.addEventListener('click', () => removeTask(task.id))

        taskItem.appendChild(checkboxContainer)
        taskItem.appendChild(taskText)
        taskItem.appendChild(deleteBtn)

        taskList.appendChild(taskItem)
    })
}

function toggleTask(taskId){
    const task = tasks.find(task=> task.id === taskId)
    if(task){
        task.completed = !task.completed
        saveTasks()
        renderTasks()
    }
}

function removeTask(taskId){
    tasks = tasks.filter(task => task.id !== taskId)
    saveTasks()
    renderTasks()
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed)
    saveTasks()
    renderTasks()
}

filters.forEach(filter=>{
    filter.addEventListener('click', ()=>{
        setActiveFilter(filter.getAttribute('data-filter'))
    })
})

function setActiveFilter(filter){
    currentFilter = filter

    filters.forEach(item=>{
        if(item.getAttribute('data-filter') === currentFilter){
            item.classList.add('active')
        }
        else{
            item.classList.remove('active')
        }
    })

    renderTasks()
    checkEmptyState()
}

function loadTasks(){
    const storedTasks = localStorage.getItem('tasks')
    if(storedTasks) tasks = JSON.parse(storedTasks)
    renderTasks()
}

function setDate(){
    const options ={
        weekday : 'long',
        month : 'short',
        day : 'numeric'
    }

    const today = new Date()
    dateElement.textContent = today.toLocaleDateString('en-US', options)
}

window.addEventListener('DOMContentLoaded', ()=>{
    loadTasks()
    updateTaskCount()
    setDate()
})


