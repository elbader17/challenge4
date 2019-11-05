const getView = (data) => `
  <header class="header-wrapper">
  <div class="header">
    <img class="header-logo" src="" alt="logo del comercio" />
    <nav class="nav">
      <a class="nav-item" href="${data.fullHost}">Inicio</a>
      <a class="nav-item" href="${data.fullHost}/alquiler">Alquiler</a>
      <a class="nav-item" href="${data.fullHost}/venta">Venta</a>
      <a class="nav-item" href="${data.fullHost}/contacto">Contacto</a>
    </nav>
  </div>
  </header>
`;

module.exports = { getView };