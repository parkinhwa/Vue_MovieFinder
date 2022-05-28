<template>
  <div class="skelotons-movie-poster"></div>
  <div class="skelotons-movie-content">
    <div class="skelotons-movie-title"></div>
    <div class="skelotons-movie-gdr">
      <div class="skelotons-movie-genre"></div>
      <div class="skelotons-movie-date"></div>
      <div class="skelotons-movie-runtime"></div>
    </div>
    <div class="skelotons-movie-dap">
      <div class="skelotons-movie-director">
        <div class="skelotons-movie-director-text"></div>
      </div>
      <div class="skelotons-movie-actors">
        <div class="skelotons-movie-actors-text"></div>
      </div>
      <div class="skelotons-movie-plot-text"></div>
      <div class="skelotons-movie-plot"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.skelotons-movie-poster {
  width: 300px;
  height: 500px;
  position: fixed;
  background-color: lightgray;
  animation: skeleton-gradient 1.8s infinite ease-in-out;
}
.skelotons-movie-content {
  width: 800px;
  height: 500px;
  margin-left: 310px;
  .skelotons-movie-title {
    margin: 0 0 10px 0;
    padding: 15px 10px;
    height: 40px;
    font-size: 42px;
    font-weight: 700;
    justify-self: center;
    background-color: lightgray;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }
  .skelotons-movie-dap {
    padding: 10px;
    background-color: lightgray;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
    .skelotons-movie-director {
      display: flex;
      &-text {
        font-weight: 700;
      }
    }
    .skelotons-movie-actors {
      display: flex;
      &-text {
        font-weight: 700;
      }
    }
    .skelotons-movie-plot {
      margin: 0 0 10px 0;
      height: 390px;
      display: flex;
      &-text {
        font-weight: 700;
      }
    }
  }
  .skelotons-movie-plot-text {
    font-size: 24px;
  }
}

@keyframes skeleton-gradient {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}
</style>
