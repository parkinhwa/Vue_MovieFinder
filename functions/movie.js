require('dotenv').config()
const axios = require('axios')
const { API_ENDPOINT, API_KEY } = process.env

exports.handler = async function () {
  const url = await axios({
    url: `${API_ENDPOINT}?apikey=${API_KEY}`,
  })
  // /.netlify/functions/workspace
  return {
    statusCode: 200,
    url
  }
}