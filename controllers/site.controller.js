const homeCtrl = require('../controllers/home.controller');
const rentCtrl = require('../controllers/rent.controller');
const saleCtrl = require('../controllers/sale.controller');
const detailCtrl = require('../controllers/detail.controller');
const contactCtrl = require('../controllers/contact.controller');

const siteView = require('../views/site.view')
const config = require('../config');

const renderSite = (content) => {
  let data = {
    ...content,
    fullHost: config.appHost
  }
  return siteView.getView(data);
}

const renderHomeSection = async (req, res) => {
  const content = await homeCtrl.renderHomeSection(req, res);
  res.status(200).send(renderSite({ content }));
}

const renderPropertiesForRentSection = async (req, res) => {
  const content = await rentCtrl.renderRentSection(req, res);
  res.status(200).send(renderSite({ content }));
}

const renderPropertiesForSaleSection = async (req, res) => {
  const content = await saleCtrl.renderSaleSection(req, res);
  res.status(200).send(renderSite({ content }));
}

const renderPropertyDetailSection = async (req, res) => {
  const content = await detailCtrl.renderDetailSection(req, res);
  res.status(200).send(renderSite({ content }));
}

const renderContactSection = (req, res) => {
  const content = contactCtrl.renderContact(req, res);
  req.session.destroy(); // clear success sent email message or errors of the form
  res.status(200).send(renderSite({ content }));
};

module.exports = {
  renderSite,
  renderHomeSection,
  renderPropertiesForRentSection,
  renderPropertiesForSaleSection,
  renderPropertyDetailSection,
  renderContactSection
}
