<template>
  <div class="genres">
    <span class="genres_title">Жанры</span>
    <div class="genres_block">
      <router-link v-for="genre in genres" :key="genre.images" to="/" class="genres_item">
        <img
          class="genres_img"
          :src="require(`../../assets/img/genres/` + genre.images)"
          :alt="genre.title"
        />
        <div class="smile">
          <img
            class="smile_img"
            :src="require(`../../assets/img/genres/` + genre.smile)"
            :alt="genre.title"
          />
          <span class="genre_title">{{genre.title}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    genres: [
      {
        images: "phone_1.png",
        smile: "smile_1.png",
        title: "Комедии"
      },
      {
        images: "phone_2.png",
        smile: "smile_2.png",
        title: "Драмы"
      },
      {
        images: "phone_3.png",
        smile: "smile_3.png",
        title: "Фантастика"
      },
      {
        images: "phone_4.png",
        smile: "smile_4.png",
        title: "Ужасы"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.genres {
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 4rem;
  margin-bottom: 5vh;
}

.genres_block {
  margin-top: 2vh;
  display: flex;
  justify-content: center;
}

.genres_item {
  margin-left: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.genres_item:hover .genres_img {
  opacity: 1;
}

.smile {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.genre_title {
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  top: 32px;
  position: relative;
}

.smile_img {
  width: 48px;
}

.genres_img {
  opacity: 0.8;
}

.genres_title {
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #333333;
}
</style>
