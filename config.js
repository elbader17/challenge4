require('dotenv').config()

const port = process.env.REAL_STATE_APP_PORT || 3001;
const appHost = process.env.REAL_STATE_APP_HOST || 'http://localhost:3001';

module.exports = {
  port,
  appHost
}
