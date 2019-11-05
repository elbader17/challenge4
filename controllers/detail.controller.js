const propertyModel = require('../models/property.model');
const detailView = require('../views/detail.view');

const renderDetailSection = async (req, res) => {
  try {
    const { slug } = req.params;
    const property = await propertyModel.findOne({slug});
    console.log(property);
    return detailView.getView(property);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { renderDetailSection }