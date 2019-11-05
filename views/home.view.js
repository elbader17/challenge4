const getView = (data) => `
  <h2>Seccion Inicio</h2>
  <h3>Destacados</h3>
  <div class="propiedades">
    ${
      data.featureProperties.map((property) => (`
        <div>
          <h1>${property.description} [${property.type}]</h1>
          <p>${property.price}</p>
        </div>
      `)).join('')
    }
  </div>
`;

module.exports = { getView };