const express = require('express'),
        router = express.Router();
        User = require('../controllers/user');
router.post('/login',(req,res)=>{
       
});

router.post('/register',User.register)

module.exports = router;