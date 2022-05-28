export default {
  namespaced: true,
  state() {
    return {
      movies: [],
      moviescontent: {},
      posterLoading: false,
      modalLoading: false,
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
      commit("assignState", { posterLoading: false });
      const movies = await fetch("/.netlify/functions/movielist", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("assignState", {
        movies,
        posterLoading: true,
      });
    },
    async detailMoviecontent({ commit }, options) {
      commit("assignState", { modalLoading: false });
      const moviescontent = await fetch("/.netlify/functions/moviedetail", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("assignState", {
        moviescontent,
        modalLoading: true,
      });
    },
  },
};
