require("dotenv").config();
const axios = require("axios");
const { API_ENDPOINT, API_KEY } = process.env;

exports.handler = async function (event) {
  const queryObject = { apikey: API_KEY, ...JSON.parse(event.body) };
  const query = new URLSearchParams(queryObject);
  const { data } = await axios({
    url: `${API_ENDPOINT}${query}`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
