const app = require("./app")
const port = process.env.PORT || 4000;


// Ouvindo na porta configurada
const server = app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = server