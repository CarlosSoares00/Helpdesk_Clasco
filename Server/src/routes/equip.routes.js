const express = require('express')
const router = express.Router()

const equipControllers = require("../controllers/equipControllers")
const VerifyToken = require("../middlewares/authMiddleware")

router.post('/admin/equip/create', VerifyToken,  equipControllers.createComputador)


module.exports = router