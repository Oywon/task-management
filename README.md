# Task Management API

A simple RESTful API built using **Node.js** and **Express.js** for the **CSE 362 Web Programming II Lab** 

## 🚀 Overview
This project demonstrates basic backend development using Express.  
It includes routes to fetch tasks, check server health, and retrieve individual tasks by ID.

## 🛠️ Setup
git clone https://github.com/Oywon/370_oywon_Task_Management.git
cd 370_oywon_Task_Management
npm install
npm start


Visit: http://localhost:3000

## 📡 API Endpoints
| Method | Route        | Description           |
|--------|-------------|----------------------|
| GET    | /           | Check API status     |
| GET    | /health     | Show uptime and health info |
| GET    | /tasks      | Get all tasks        |
| GET    | /tasks/:id  | Get task by ID       |

##  Example Task
{
"id": 1,
"title": "Learn Node.js",
"completed": false,
"priority": "high",
"createdAt": "2025-11-04T18:00:00.000Z"
}

text

##  Author
Oywon Islam  
Department of CSE, Jahangirnagar University
