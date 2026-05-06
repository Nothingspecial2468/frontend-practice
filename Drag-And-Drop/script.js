const cards = document.querySelectorAll(".card")
const lists = document.querySelectorAll(".list")

for(const card of cards){
    card.addEventListener("dragstart", dragStart)
    card.addEventListener("dragend", dragEnd)
}

for(const list of lists){
    list.addEventListener("dragover", dragOver)
    list.addEventListener("dragenter", dragEnter)
    list.addEventListener("dragleave", dragLeave)
    list.addEventListener("drop", dragDrop)
}

function dragStart(e){
    e.dataTransfer.setData("text/plain", this.id)   // it's like a storage box which travels with the dragging process 
}

function dragEnd(){
    console.log("Drag ended")
}

function dragOver(e){
    e.preventDefault()  // it makes the browser allow dropping
}

function dragEnter(e){
    e.preventDefault()

    this.classList.add("over") // it adds the visual effects
}

function dragLeave(e){
    this.classList.remove("over")
}

function dragDrop(e){
    const id = e.dataTransfer.getData("text/plain") // retrieve stored data

    const card = document.getElementById(id) // get the dragged element

    this.appendChild(card) // move the item into new list

    this.classList.remove("over")
}