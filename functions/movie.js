require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

exports.handler = async function (event) {
  const options = JSON.stringify(event.body);
  const { title = "", id = "" } = options;
  let url = "";
  if (url) {
    if (title) {
      url = `https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=1`;
    } else if (id) {
      url = `https://www.omdbapi.com?apikey=${API_KEY}&i=${id}&plot=full`;
    }
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  }
};
