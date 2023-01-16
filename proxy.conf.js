const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  },
  {
    context: ["/api"],
    target: 'https://brasilapi.com.br/',
    secure: false,
    logLevel: 'debug'
  },
]
module.exports = PROXY_CONFIG
