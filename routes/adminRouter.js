const express = require('express')
const router = express.Router()

const auth = require('../controllers/authController')

router.get('/', auth, (req, res) => {

    if (req.user.admin) {
        res.send('This data can only be seen by the Admin')
    } else {
        res.status(401).send('Not Admin: Access denied')
    }

})

router.get('/free', auth, (req, res) => {
    res.send('This data can only be seen by someone who is logged in')
})

module.exports = router