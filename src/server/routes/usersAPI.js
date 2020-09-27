const express = require('express');
//router-express router
const router = express.Router();
//gravatar-for the avatar
//const gravatar = require('gravatar');
//bcrypt-to encrypt the password
//const bcrypt = require('bcryptjs');
//jwt-to the web token
//const jwt = require('jsonwebtoken');

//Load Input Validation
//const validateRegisterInput = require('../../validation/register');
//const validateLoginInput = require('../../validation/login');

//Handling router requests
// @route          GET api/users//
// @description    Tests users route
// @access         Public
router.get('/', (req, res) =>
	res.json({
		msg: 'Users works',
	})
);
// @route          POST api/users/register
// @description    Register user
// @access         Public
router.post('/register', (req, res) => {
	//from validation->register
	//const { errors, isValid } = validateRegisterInput(req.body);
	//check validation
	//if (!isValid) {
		//return any errors with 400 status
		//return res.status(400).json(errors);
	//}
	//looking for a record that has the email that the user is trying to register with
	User.findOne({ email: req.body.email }).then(user => {
		//there is a user with that email
		if (user) {
			errors.email = 'Email already exists';
			return res.status(400).json(errors);
		} //if there isn't then we need to create a user
		else {
			//req.body.-will come from the form
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			});
			//hash the password
			// bcrypt.genSalt(10, (err, salt) => {
			// 	bcrypt.hash(newUser.password, salt, (err, hash) => {
			// 		if (err) {
			// 			throw err;
			// 		}
			// 		//save the hash password
			// 		newUser.password = hash;
			// 		newUser
			// 			.save()
			// 			.then(user => res.json(user))
			// 			.catch(err => console.log(err));
			// 	});
			// });
		}
	});
});

module.exports = router;