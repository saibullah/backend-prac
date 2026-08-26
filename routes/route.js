const express = require("express")
const {getUsers, createUser , getsingleuser , updateUser} = require('../controllers/userController')
const router = express.Router()
const {register , login} = require("../controllers/auth")
router.post('/', createUser)
router.get('/', getUsers)
router.get('/:id' , getsingleuser)
router.put('/:id' , updateUser)
module.exports= router