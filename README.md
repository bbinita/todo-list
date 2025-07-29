

# 📝 To-Do List Application

A simple and intuitive To-Do List application built with React. This application allows users to add new tasks, mark them as completed, delete them, and filter tasks based on their status (all, active, or completed).

## ✨ Features

* **Add New Tasks:** Easily add new items to your to-do list.
* **Toggle Completion:** Mark tasks as complete or incomplete with a single click.
* **Delete Tasks:** Remove unwanted tasks from your list.
* **Filter Tasks:** View all tasks, only active tasks, or only completed tasks.
* **Responsive Design:** (Assumed based on typical React app development, though not explicitly shown in code, common to include.)

## 🚀 Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **HTML5:** For structuring the web content.
* **CSS3:** For styling the application (assumed external stylesheets or inline styles for components).

## 📦 Project Structure

to-do-list-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── Components/
│   │   ├── ToDoInput.js
│   │   ├── ToDoItem.js
│   │   └── ToDoFilter.js
│   └── (optional) styles/
│       └── App.css (or similar stylesheet)
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

<img width="1796" height="646" alt="Screenshot 2025-07-29 150917" src="https://github.com/user-attachments/assets/d7dca16f-5c5c-459f-bcc7-3689a60c76c1" />

## ⚙️ Installation and Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js and npm (Node Package Manager) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd to-do-list-app
    ```
    (Replace `<repository_url>` with the actual URL of your GitHub repository.)

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode:

```bash
npm start
This will open the application in your browser at http://localhost:3000. The page will reload if you make edits. You will also see any lint errors in the console.

Usage
Add a Task: Type your task in the "Enter new task..." input field and click the "Add" button.

Mark as Complete/Incomplete: Click on a task item to toggle its completion status.

Delete a Task: (Assumed, typically there's a delete button on each item, not explicitly shown in code but deleteTodo prop implies it).

Filter Tasks: Use the "All", "Active", and "Completed" buttons to filter your task list.

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! ⭐ Thanks again!

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request
