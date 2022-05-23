<template>
  <video
    class="bg-video"
    playsinline="playsinline"
    autoplay="autoplay"
    muted="muted"
    loop="loop"
  >
    <source :src="video" type="video/mp4" />
  </video>
  <div class="masthead">
    <div class="masthead-content text-white">
      <div class="container-fluid px-4 px-lg-0">
        <h1 class="fst-italic lh-1 mb-4">Movie Finder</h1>
        <p class="mb-5">Movie Finder에서 좋아하는 영화를 찾아봅시다!</p>
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
                @click="SearchPagerouter(title)"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: require("../assets/mp4/bg.mp4"),
      title: "",
    };
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
    KeyupHandler(event) {
      if (event.key === "Enter") {
        this.SearchPagerouter(this.title);
      }
    },
    SearchPagerouter(titleInit) {
      if (titleInit.trim()) {
        this.$router.push({ name: "SearchPage", params: { titleInit } });
      } else {
        alert("영화 제목을 입력해주세요!");
      }
    },
  },
};
</script>
<style src="~/css/styles.css" scoped></style>
