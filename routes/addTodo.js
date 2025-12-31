const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


router.post("/", async (req, res) => {
     try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo)
     } catch (err) {
        res.status(500).json({error: err.message});
     }
})

module.exports = router;