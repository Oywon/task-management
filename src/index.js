const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory task storage (will be replaced in later labs)
const tasks = [
  {
    id: 1,
    title: "Complete REST API Lab",
    completed: false,
    priority: "high",
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Review Express Middleware",
    completed: true,
    priority: "medium",
    createdAt: new Date()
  },
  {
    id: 3,
    title: "Write Postman Tests",
    completed: false,
    priority: "low",
    createdAt: new Date()
  },
  {
    id: 4,
    title: "Update tasks.js route",
    completed: false,
    priority: "high",
    createdAt: new Date()
  },
  {
    id: 5,
    title: "Submit LAB 02 Assignment",
    completed: false,
    priority: "medium",
    createdAt: new Date()
  }
];
app.locals.tasks = tasks;

// -------- Middleware --------
app.use(express.json()); // Parse JSON request bodies

// -------- Routes --------
app.use('/tasks', taskRouter);

// Handle invalid JSON (SyntaxError from express.json)
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
  next(err);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Not Found'
  });
});

// -------- Start Server --------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
