const propertyModel = require('../models/property.model')
const homeView = require('../views/home.view')

const renderHomeSection = async () => {
  try {
    const properties = await propertyModel.find({featured: true});
    return homeView.getView(properties);
  } catch(error) {
    console.log(error);
  }
}

module.exports = { renderHomeSection }