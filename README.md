# 📝 TO-DO LIST APP

A simple and interactive To-Do List web application built using **Node.js**, **Express**, **MongoDB**, and **EJS** templating engine. Users can add, edit, and delete tasks with a clean user interface.

---

## 🚀 Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Responsive and clean UI using EJS
- MongoDB for persistent storage

---

## 🛠️ Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **EJS** – Templating engine
- **CSS** – Basic styling

---

## 📁 Project Structure

TO_DO_LIST_FINAL/
│
├── models/
│ └── task.js # Mongoose schema for tasks
├── public/
│ └── css/style.css # Stylesheet
├── views/
│ ├── home.ejs # Main task list page
│ └── includes/ # Partial views (header, footer)
├── app.js # Main server file
├── package.json # Project dependencies
└── README.md # You're reading it!

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/immortalvivaan461/TO_DO_LIST_FINAl.git
   cd TO_DO_LIST_FINAl
Install dependencies

bash
Copy
Edit
npm install
Configure MongoDB

Make sure MongoDB is installed and running

Replace MongoDB connection string in app.js or .env with your credentials

Start the app

bash
Copy
Edit
node app.js
Visit the app
Open your browser and go to http://localhost:8080

🌐 Deployment
Render: https://to-do-list-app-xbnn.onrender.com/
The project can be deployed on Render, Heroku, or any Node.js-supported hosting platform. Make sure to set up environment variables (like MongoDB URI) if deploying remotely.

✍️ Author
Vivaan – GitHub
