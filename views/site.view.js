const getView = (data) => `
  <html>
  <head>
    <title>Inmobiliaria SPACIOS</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
  </head>
  <body>
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
    ${data.content}
    <div class="footer-wrapper">
      <div class="footer">
        <p>footer</p>
      </div>
    </div>
  <body>
  </html>
`;

module.exports = { getView };
