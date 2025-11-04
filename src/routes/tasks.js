const express = require('express');
const router = express.Router();

const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Test API with Postman', completed: true, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Add routes and error handling', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 5, title: 'Write README and finalize lab', completed: false, priority: 'high', createdAt: new Date() }
];

// GET /tasks → return all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id → return a specific task
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

module.exports = router;
