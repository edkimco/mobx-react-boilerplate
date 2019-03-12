const env = process.env.EDDY_ENV || process.env.NODE_ENV || 'development'

const config = {
  port: 80,
  ssl: {
    pfx: '',
    passphrase: ''
  }
}

if (env === 'public-develop') {

}

if (env === 'production') {
}

module.exports = config
