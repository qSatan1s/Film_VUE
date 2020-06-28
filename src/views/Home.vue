<template>
  <div class="content">
    <div class="films">
      <span class="films_title">🔥 Новинки</span>
      <div class="films_block">
        <router-link v-for="film in films" :key="film.title" :to="film.to" class="films_item">
          <img
            class="fims_img film_hover"
            :src="require(`../assets/img/Films/` + film.images)"
            :alt="film.title"
          />
          <span>{{film.title}}</span>
          <div class="overlay">
            <div class="overlay_block">
              <span class="overlay_text">{{film.description}}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <app-genres />
  </div>
</template>

<script>
import AppGenres from "@/components/pageParts/genres";
export default {
  data: () => ({
    films: [
      {
        title: "Мульт в кино. Выпуск №103. Некогда грустить!",
        to: "/",
        images: "Film_1.png",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque eos quasi ipsa, optio harum repudiandae aliquam culpa? Maiores neque ut pariatur aspernatur facilis sint eaqueofficia atque voluptates illum."
      },
      {
        title: "Новый Бэтмен",
        to: "/",
        images: "Film_2.png",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque eos quasi ipsa, optio harum repudiandae aliquam culpa? Maiores neque ut pariatur aspernatur facilis sint eaqueofficia atque voluptates illum."
      },
      {
        title: "Однажды... в Голливуде",
        to: "/",
        images: "Film_3.png",
        description:
          "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
      },
      {
        title: "Стриптизёрши",
        to: "/",
        images: "Film_4.png",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque eos quasi ipsa, optio harum repudiandae aliquam culpa? Maiores neque ut pariatur aspernatur facilis sint eaqueofficia atque voluptates illum."
      }
    ]
  }),
  components: {
    AppGenres
  }
};
</script>

<style lang="scss" scoped>
.films {
  margin-top: 4rem;
  margin-right: 5vw;
  margin-left: 5vw;
}

.films_title {
  font-family: Rubik;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
}

.films_block {
  display: flex;

  margin-top: 2vh;

  justify-content: center;
}

.films_item {
  font-family: Rubik;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  line-height: 24px;

  position: relative;

  display: flex;
  flex-direction: column;

  width: 280px;
  margin-left: 1rem;

  color: #333;

  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 88.5%;

  transition: 0.3s ease-in-out;

  opacity: 0;
  border-radius: 8px;
  background: rgba(59, 59, 59, 0.685);
}

.overlay_block {
  width: 242px;
  margin: 6%;
}

.overlay_text {
  font-size: 16px;
  line-height: 140%;

  color: #f2f2f2;
}

.films_item:hover .overlay {
  opacity: 1;
}

.fims_img {
  border-radius: 8px;
  background: #c4c4c4;
}
</style>
