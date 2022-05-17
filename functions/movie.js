require('dotenv').config()
const axios = require('axios')
const { API_ENDPOINT, API_KEY } = process.env

exports.handler = async function () {
  const { url } = await axios({
    url: `${API_ENDPOINT}?apikey=${API_KEY}`,
  })
  console.log(JSON.stringify(url));
  return {
    statusCode: 200,
    body: JSON.stringify(url)
  }
}