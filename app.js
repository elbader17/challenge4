const express = require('express');
const siteCtrl = require('./controllers/site.controller')
const homeCtrl = require('./controllers/home.controller')
const config = require('./config');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => res.status(200).send(siteCtrl.renderSite({ content: homeCtrl.renderHome()})));
app.get('/alquiler', (req, res) => res.status(200).send(siteCtrl.renderSite({ content: `<h2>Seccion Alquiler</h2>` })));
app.get('/venta', (req, res) => res.status(200).send(siteCtrl.renderSite({ content: `<h2>Seccion Venta</h2>` })));
app.get('/contacto', (req, res) => res.status(200).send(siteCtrl.renderSite({ content: `<h2>Seccion Contacto</h2>` })));

// start server
app.listen(config.port, () => console.log(`Listening on port ${config.port}!`));
