const express = require('express');
const router = express.Router();
const tasksController = require('../controller/tasksController');

router.post('/tasks',tasksController.post);
router.get('/tasks',tasksController.get);
router.put('/tasks/:id',tasksController.put);
router.delete('/tasks/:id',tasksController.delete)
router.delete('/tasks',tasksController.deleteAll)
router.put('/tasksItem/:id',tasksController.putItem)
module.exports = router;