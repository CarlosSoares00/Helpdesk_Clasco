const express = require('express')
const router = express.Router()

const authController = require("../controllers/authController")

router.post("/useradmin/create", authController.registerAdmin)
router.post("/user/create", authController.register)

router.post("/user/login", authController.login)
router.post("/user_admin/login", authController.loginAdmin)

module.exports = router