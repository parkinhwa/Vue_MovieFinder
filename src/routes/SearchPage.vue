<template>
  <header class="masthead-search">
    <div class="masthead-search-content text-white">
      <div class="container-fluid px-4 px-lg-0">
        <h1 class="fst-italic lh-1 mb-4">Movie Finder</h1>
        <div id="contactForm">
          <div class="row input-group-newsletter">
            <div class="col">
              <input
                class="form-control"
                id="text"
                type="text"
                placeholder="영화 제목을 입력해주세요.."
                v-model="title"
              />
            </div>
            <div class="col-auto">
              <button
                class="btn btn-primary"
                id="submitButton"
                type="submit"
                @click="findmovietitle(title)"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="movie-list">
    <div
      class="movie-container"
      v-for="movie in $store.state.movies.movies.Search"
    >
      <img
        class="movie-poster"
        :src="movie.Poster"
        @click="[isShowUpdate(isShow), movieIdUpdate(movie.imdbID)]"
      />
      <div class="movie-title">{{ movie.Title }}</div>
    </div>
  </main>
  <Modal v-model:modelValue="isShow" v-model:movieId="movieId"></Modal>
</template>
<script>
import Modal from "~/components/Modal";
export default {
  data() {
    return {
      title: this.titleinit,
      movieId: "",
      isShow: false,
    };
  },
  mounted() {
    if (this.titleinit) {
      this.findmovietitle(this.titleinit);
    }
  },
  components: {
    Modal,
  },
  watch: {
    title(newValue) {
      if (newValue) {
        window.addEventListener("keyup", this.keyupHandler);
      } else {
        window.removeEventListener("keyup", this.keyupHandler);
      }
    },
  },
  methods: {
    keyupHandler(event) {
      console.log(event.key);
      if (event.key === "Enter") {
        this.findmovietitle(this.title);
      }
    },
    isShowUpdate(isShow) {
      this.isShow = !isShow;
    },
    movieIdUpdate(id) {
      this.movieId = id;
    },
    async findmovietitle(title) {
      if (title.trim()) {
        await this.$store.dispatch("movies/findMovietitle", {
          title,
        });
      } else {
        alert("영화 제목을 입력해주세요");
      }
    },
  },
  props: ["titleinit"],
};
</script>
<style src="~/css/styles.css" scoped></style>
