# Drag & Drop Task Board

- A simple drag and drop task board where users can move cards between different lists.


## 🚀 Features

- Drag cards between lists
- Visual feedback while dragging
- Smooth DOM update using JS
- Uses Drag & Drop API


## 🛠 Tech Stack

- HTML
- CSS
- JavaScript


## 📌 How It Works
- On drag start, card ID is stored using `dataTransfer.setData()`
- On drop, ID is retrieved using `getData()`
- The selected card is moved to the new list
