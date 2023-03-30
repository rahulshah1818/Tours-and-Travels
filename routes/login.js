const express = require('express');
const user = require('../models/user');

const router = express.Router();


router.post("/login", (req, res) => {
    // Validation
    if (!req.body.email || !req.body.password) {
        res.status(200).json({message:"Please fill out all fields"});
    } else {
        // Check if user exists
        user.findOne({ email: req.body.email })
    .then(result => {
        // code to handle the result
        if (!result) {
            res.status(200).json({message:"Email address not found"});
        } else {
            // Check if password is correct
            if (req.body.password == result.password) {
                res.status(200).json({
                    message: "Login successful", 
             })
            } else {
                res.status(200).json({message : "Incorrect password"});
            }
        }
    })
    .catch(err => {
        // code to handle the error
        res.status(500).send(err);
    });
      
    }
});

module.exports = router;
