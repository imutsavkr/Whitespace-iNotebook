const express = require('express');
const router = express.Router();
const User = require('../models/User');
// create a user using : POST "/api/auth/" Doesen't Require Authentication

router.post('/', (req, res)=>{ 
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
} )

// router.get('/', (req, res)=>{
//     console.log(req.body);
//     res.send("Hello");
// } )

module.exports = router