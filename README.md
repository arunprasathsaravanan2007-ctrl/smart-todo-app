# 📝 Smart Todo App

A modern and responsive To-Do List application built using HTML, CSS, and JavaScript. This project demonstrates core frontend development concepts including DOM manipulation, event handling, state management, CRUD operations, filtering, and localStorage persistence.

---

## 🚀 Live Demo

Add your GitHub Pages link here after deployment:

https://your-username.github.io/smart-todo-app/

---

## 📸 Preview

![Todo App Screenshot](screenshot.png)

---

## ✨ Features

### Task Management
- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks

### Filtering
- View all tasks
- View active tasks only
- View completed tasks only

### Data Persistence
- Automatically saves tasks using Local Storage
- Retains tasks even after browser refresh or restart

### User Interface
- Modern responsive design
- Smooth animations
- Mobile-friendly layout
- Clean and intuitive experience

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API

---

## 📂 Project Structure

```text
smart-todo-app/
│
├── index.html
├── style.css
├── app.js
├── screenshot.png
└── README.md
```

---

## 🧠 Concepts Practiced

### JavaScript
- Variables and Constants
- Arrays and Objects
- Functions
- Template Literals
- Arrow Functions
- Array Methods
  - filter()
  - map()
  - find()
  - forEach()

### DOM Manipulation
- querySelector()
- getElementById()
- createElement()
- innerHTML()
- appendChild()

### Event Handling
- Click Events
- Submit Events
- Event Delegation

### State Management
- Centralized Todo State
- UI Rendering Based on State
- Dynamic Updates

### Browser Storage
- localStorage.setItem()
- localStorage.getItem()
- JSON.stringify()
- JSON.parse()

---

## ⚙️ How It Works

### 1. Add Task

The user enters a task and clicks Add.

```javascript
addTodo("Learn JavaScript");
```

The task is added to the application state.

---

### 2. Save Data

Tasks are automatically saved.

```javascript
localStorage.setItem(
  "todos",
  JSON.stringify(todos)
);
```

---

### 3. Render UI

The application dynamically renders tasks from the state.

```javascript
renderTodos();
```

---

### 4. Filter Tasks

Users can switch between:

- All
- Active
- Completed

without affecting the original data.

---

## 🔄 Application Flow

```text
User Action
     ↓
Event Listener
     ↓
Update State
     ↓
Save to Local Storage
     ↓
Render UI
```

---

## 🎯 Learning Outcomes

By building this project, I learned:

- CRUD operations in JavaScript
- DOM manipulation
- Event delegation
- Local storage persistence
- State-driven UI rendering
- Responsive web design
- Project structuring and GitHub workflow

---

## 📱 Responsive Design

The application works across:

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

## 🔮 Future Improvements

- Dark Mode
- Due Dates
- Categories/Tags
- Drag and Drop Sorting
- Search Functionality
- Task Priorities
- Backend Integration
- User Authentication

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Arun Prasath

GitHub:
https://github.com/arunprasathsaravanan2007-ctrl

LinkedIn:
(Add your LinkedIn profile here)

---

⭐ If you found this project useful, please consider giving it a star.
