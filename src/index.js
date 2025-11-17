const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory task storage (will be replaced in later labs)
const tasks = [
  { id: 1, title: 'Sample Task', completed: false }
];
app.locals.tasks = tasks; // share with routes

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
