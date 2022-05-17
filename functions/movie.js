require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { title, id } = options;
  let url = title
    ? `https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=1`
    : `https://www.omdbapi.com?apikey=${API_KEY}&i=${id}&plot=full`;
  try {
    const { data } = await axios.get(url);
    if (data.Error) {
      return {
        statusCode: 400,
        body: data.Error,
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: error.response.status, body: error.message };
  }
};
