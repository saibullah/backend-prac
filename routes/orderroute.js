const express = require('express')
const router = express.Router()

const {addtocart , getmyorder , adminallorder} = require('../controllers/cartcontroller')

const auth = require('../middleware/authmiddleware')
const admin = require('../middleware/admin')

router.post('/addtocart', auth , addtocart)
router.get('/my-order', auth , getmyorder)
router.get('/',auth , admin ,adminallorder)

module.exports =router