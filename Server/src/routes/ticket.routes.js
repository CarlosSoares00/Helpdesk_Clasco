const express = require('express')
const router = express.Router()

const VerifyToken = require("../middlewares/authMiddleware.js")
const ticketController = require("../controllers/ticketControllers")

router.post("/ticket/create", VerifyToken  ,ticketController.createTicket)
router.get("/tickets", VerifyToken  ,ticketController.getTickets)
router.get("/ticket/:idTicket", VerifyToken  ,ticketController.getTicket)

router.put('/tickets/:idTicket/assumir', VerifyToken  ,ticketController.AssumedTicket );
router.put('/tickets/:idTicket/terminar', VerifyToken  ,ticketController.closedTicket );


module.exports = router