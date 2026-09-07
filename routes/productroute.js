const express = require("express")

const router = express.Router()

const {createProduct , getallProduct,getsingleProduct ,updateProduct , deleteProduct}=require('../controllers/productcontroller')


const auth = require('../middleware/authmiddleware')
const admin = require('../middleware/admin')



router.post('/' , auth , admin, createProduct )

router.get('/', getallProduct)

router.get('/:id' , getsingleProduct)

router.put('/:id' ,auth , admin ,  updateProduct)

router.delete('/:id',auth , admin , deleteProduct)



module.exports = router