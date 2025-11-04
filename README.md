# Task Management API

A simple RESTful API built using **Node.js** and **Express.js** for the **CSE 362 Web Programming II Lab** at Jahangirnagar University.

## 🚀 Overview
This project demonstrates basic backend development using Express.  
It includes routes to fetch tasks, check server health, and retrieve individual tasks by ID.

## 🛠️ Setup
```bash
git clone https://github.com/Oywon/task-management.git
cd task-management
npm install
npm start
#folder structure
src/
 ├── index.js          # Main server file
 └── routes/
     └── tasks.js      # Tasks route handler
#API endpoints
| Method | Route     | Description                 |
| ------ | --------- | --------------------------- |
| GET    | /         | Check API status            |
| GET    | /health   | Show uptime and health info |
| GET    | /tasks    | Get all tasks               |
| GET    | /task/:id | Get task by ID              |
