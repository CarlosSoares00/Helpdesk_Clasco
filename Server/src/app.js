const express = require('express');
const morgan = require("morgan")
const cors = require("cors")
const models = require('../database/models');  // Importa todos os models do Sequelize

const app = express();

// Configuração do middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));


// Importacao de Routas
const departament = require('./routes/departamente.routes.js')
const authController = require('./routes/auth.routes.js')
const ticketController = require('./routes/ticket.routes.js');
const userController = require('./routes/user.routes.js');
const equipController = require('./routes/equip.routes.js')


// Routas
app.use(departament)
app.use(authController)
app.use(userController)
app.use(ticketController)
app.use(equipController)



module.exports = app;
