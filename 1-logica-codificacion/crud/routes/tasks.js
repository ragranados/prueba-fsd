var express = require('express');
var router = express.Router();

let tasks = [];

/* GET users listing. */
router.get('/', function (req, res, next) {

    const { status } = req.query;

    try {

        let filtered_tasks = tasks;

        if (status) {
            filtered_tasks = tasks.filter(task => task.status == status);
        }

        res.status(200).json(filtered_tasks);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/create', function (req, res, next) {

    const { title, description } = req.body;

    try {
        if (!title || !description) {
            res.status(400).json("Faltan campos.");
        }

        tasks.push({ title, description, status: "pendiente" });

        res.status(200).json("Tarea creada con exito.")
    } catch (error) {
        res.status(500).json(error);
    }

})

module.exports = router;