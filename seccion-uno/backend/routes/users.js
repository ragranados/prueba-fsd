var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

function isValidEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

router.post('/register', function (req, res, next) {

	try {
		const { name, email, age } = req.body;

		if (!(name.trim())) {
			res.status(400).json("No se recibió el nombre.");
		}

		if (!isValidEmail(email.trim())) {
			res.status(400).json("No es un correo valido");
		}

		if (age < 18) {
			res.status(400).json("Edad es menor a 18 años.");
		}
	} catch (error) {
		return res.status(500).json(error.message);
	}

	res.status(200).json("Datos recibidos de forma correcta.");
});

module.exports = router;
