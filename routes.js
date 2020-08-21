const express = require('express');
const boleto = require('./controllers/crefisa');
const veiculo = require('./controllers/sinesp');

const routes = express.Router();
routes.post('/boletos', boleto.check_boleto);
routes.post('/veiculos', veiculo.check_sinesp);

module.exports = routes;