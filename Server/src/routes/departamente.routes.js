const express = require('express')
const router = express.Router()

const departamentController =  require("../controllers/departamentController.js")
const VerifyToken = require("../middlewares/authMiddleware.js")


router.post('/department', departamentController.createDp)
router.get('/admin/get/departments', departamentController.getsDp)


module.exports = router