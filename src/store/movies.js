const { API_KEY } = process.env;
export default {
  namespaced: true,
  state() {
    return {
      movies: [],
      moviescontent: [],
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async findMovietitle({ commit }, payload) {
      const { title } = payload;
      const query = {
        s: title,
        page: 1,
      };
      const movies = await _request(query);
      console.log(movies);
      // commit("assignState", {
      //   movies,
      // });
    },
    async detailMoviecontent({ commit }, payload) {
      const { id } = payload;
      const query = {
        i: id,
        plot: "pull",
      };
      const moviescontent = await _request(query);
      console.log(moviescontent);
      // const moviescontent = await fetch(
      //   `https://www.omdbapi.com?apikey=${API_KEY}&i=${id}&plot=full`
      // ).then((res) => res.json());
      // commit("assignState", {
      //   moviescontent,
      // });
    },
  },
};
async function _request(options) {
  return await fetch("/.netlify/functions/movie", {
    method: "POST",
    body: JSON.stringify(options),
  }).then((res) => res.json());
}
