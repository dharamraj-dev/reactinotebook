const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj={
        a: "This",
        number: 35
    }
    res.json(obj)
})

module.exports = router
