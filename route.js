const express = require('express')
const router = express.Router()
const {User} = require('./modal')

// GET
router.get('/users', async (req, res)  => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        console.log(error)
    }
})

//DELETE


module.exports = router
