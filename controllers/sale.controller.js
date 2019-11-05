const propertyModel = require('../models/property.model');
const saleView = require('../views/sale.view');

const renderSaleSection = async () => {
  try {
    const properties = await propertyModel.find({ type: 'sale' });
    return saleView.getView(properties);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { renderSaleSection }