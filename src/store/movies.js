const { API_KEY } = process.env
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
        `https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=1`,
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
        `https://www.omdbapi.com?apikey=${API_KEY}&i=${id}&plot=full`
      ).then((res) => res.json());
      commit("assignState", {
        moviescontent,
      });
    },
  },
};
