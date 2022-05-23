const { API_KEY } = process.env;
export default {
  namespaced: true,
  state() {
    return {
      movies: [],
      moviescontent: {},
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
    async findMovietitle({ commit }, options) {
      const movies = await fetch("/.netlify/functions/movielist", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("assignState", {
        movies,
      });
    },
    async detailMoviecontent({ commit }, options) {
      const moviescontent = await fetch("/.netlify/functions/moviedetail", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("assignState", {
        moviescontent,
      });
    },
  },
};
