<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="modal" @click="offModal">
        <div
          :style="{ width: `${parseInt(width, 10)}px` }"
          class="modal__inner"
          @click.stop
        >
          <template v-if="$store.state.movies.modalLoading">
            <img
              class="modal-movie-poster"
              :src="$store.state.movies.moviescontent.Poster"
            />
            <div class="modal-movie-content">
              <div class="modal-movie-title">
                {{ $store.state.movies.moviescontent.Title }}
              </div>
              <div class="modal-movie-gdr">
                <div class="modal-movie-genre">
                  {{ $store.state.movies.moviescontent.Genre }}
                </div>
                <div class="modal-movie-date">
                  {{ $store.state.movies.moviescontent.Released }}
                </div>
                <div class="modal-movie-runtime">
                  {{ $store.state.movies.moviescontent.Runtime }}
                </div>
              </div>
              <div class="modal-movie-dap">
                <div class="modal-movie-director">
                  <div class="modal-movie-director-text">Director :&nbsp</div>
                  {{ $store.state.movies.moviescontent.Director }}
                </div>
                <div class="modal-movie-actors">
                  <div class="modal-movie-actors-text">Actors :&nbsp</div>
                  {{ $store.state.movies.moviescontent.Actors }}
                </div>
                <div class="modal-movie-plot-text">Content</div>
                <div class="modal-movie-plot">
                  {{ $store.state.movies.moviescontent.Plot }}
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <Skelotons />
          </template>
          <button class="close" @click="offModal">X</button>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script>
import Skelotons from "../components/Skelotons.vue";
export default {
  components: {
    Skelotons,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    movieId: {
      type: String,
      default: "",
    },
    width: {
      type: [String, Number],
      default: 1000,
    },
  },
  watch: {
    visible(newValue) {
      if (newValue) {
        window.addEventListener("keyup", this.keyupHandler);
      } else {
        window.removeEventListener("keyup", this.keyupHandler);
      }
    },
    movieId() {
      this.detailmoviecontent(this.movieId);
    },
  },
  methods: {
    keyupHandler(event) {
      if (event.key === "Escape") {
        this.offModal();
      }
    },
    offModal() {
      this.$emit("update:visible", false);
    },
    detailmoviecontent(id) {
      this.$store.dispatch("movies/detailMoviecontent", {
        id,
      });
    },
  },
  emits: ["update:visible"],
};
</script>

<style scoped lang="scss">
.modal {
  width: 100%;
  height: 100%;
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    min-width: 1000px;
    height: 600px;
    background-color: white;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 10px 10px rgba(black, 0.2);
    display: flex;
    align-items: center;
    overflow-y: auto;
    word-break: break-all;
    .modal-movie-poster {
      width: 300px;
      height: 500px;
      position: fixed;
    }
    .modal-movie-content {
      width: 800px;
      height: 500px;
      margin-left: 310px;
      .modal-movie-title {
        padding: 15px 10px;
        font-size: 42px;
        font-weight: 700;
        justify-self: center;
      }
      .modal-movie-gdr {
        display: flex;
        .modal-movie-genre {
          margin: 10px;
          padding-right: 10px;
          border-right: 1px solid gray;
        }
        .modal-movie-date {
          margin: 10px;
          padding-right: 20px;
          border-right: 1px solid gray;
        }
        .modal-movie-runtime {
          margin: 10px;
          padding-right: 10px;
        }
      }
      .modal-movie-dap {
        padding: 10px;
        .modal-movie-director {
          display: flex;
          &-text {
            font-weight: 700;
          }
        }
        .modal-movie-actors {
          display: flex;
          padding: 5px 0px;
          &-text {
            font-weight: 700;
          }
        }
      }
      .modal-movie-plot-text {
        margin: 10px 0;
        font-size: 24px;
      }
    }
    button.close {
      top: 0;
      border: none;
      background-color: white;
      align-self: flex-start;
    }
  }
}
</style>
