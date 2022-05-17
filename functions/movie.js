require('dotenv').config()
const axios = require('axios')
const { API_ENDPOINT, API_KEY } = process.env

exports.handler = async function () {
  const url = `${API_ENDPOINT}?apikey=${API_KEY}`
  const res = await axios.get(url)
  console.log(res.data);
  return {
    statusCode: 200,
    body: JSON.stringify(res.data)
  }
}