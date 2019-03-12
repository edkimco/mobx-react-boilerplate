const env = process.env.EDDY_ENV || process.env.NODE_ENV || 'development'

const config = {
  api: {
    host: 'http://localhost',
    port: 8080,
    prefix: 'api'
  }
}

if (env === 'public-develop') {

}

if (env === 'production') {

}

export default config