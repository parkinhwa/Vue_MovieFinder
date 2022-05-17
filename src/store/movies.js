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
      const movies = await fetch(
        `./netlify/functions/movies&s=${title}&page=1`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      commit("assignState", {
        movies,
      });
    },
    async detailMoviecontent({ commit }, payload) {
      const { id } = payload;
      const moviescontent = await fetch(
        `./netlify/functions/movies&i=${id}&plot=full`
      ).then((res) => res.json());
      commit("assignState", {
        moviescontent,
      });
    },
  },
};