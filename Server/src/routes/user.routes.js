const express = require('express')
const router =  express.Router()

const VerifyToken = require("../middlewares/authMiddleware.js")
const userController = require('../controllers/userController.js')


router.get("/user/me", VerifyToken, userController.getAdmin)


module.exports = router