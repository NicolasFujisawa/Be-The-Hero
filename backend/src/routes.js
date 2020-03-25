const express = require('express');

const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.post('/ong', ongController.create);
routes.get('/ong', ongController.index);

routes.post('/incident', incidentController.create);
routes.get('/incident', incidentController.index);
routes.delete('/incident/:id', incidentController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;