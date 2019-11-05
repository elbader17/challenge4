const propertyModel = require('../models/property.model');
const rentView = require('../views/rent.view');

const renderRentSection = async (req, res) => {
  try {
    // const sector = req.query.sector;
    const { sector } = req.query;
    let filters = { type: 'rent' };
    if (sector) {
      filters = { ...filters, sector};
    }
    const properties = await propertyModel.find(filters);
    return rentView.getView(properties);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { renderRentSection }