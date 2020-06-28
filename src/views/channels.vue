<template>
  <div class="container">
    <div
      class="channel_item"
      v-for="(channel, index) in channels"
      :key="`${channel.title}_${index}`"
    >
      <div class="show_img">
        <img :src="require(`../assets/img/channels/` + channel.images)" :alt="channel.title" />
      </div>
      <div class="channel_text">
        <span class="channel_name">{{ channel.title }}</span>
        <router-link
          v-for="(show, index) in channel.progremm"
          :key="`${show.title}_${index}`"
          :class="{ active: show.isActive }"
          :to="show.to"
          class="channel_proggram"
          >{{ show.title }}</router-link
        >
      </div>
      <div class="fake"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    channels: [
      {
        images: '1.png',
        title: 'Первый канал',
        progremm: [
          {
            title: 'Новости (с субтитрами)',
            to: '#',
            isActive: true,
          },
          { title: 'Давай поженимся', to: '#' },
          { title: 'Другие новости', to: '#' },
        ],
      },
      {
        images: '2x2.png',
        title: '2x2',
        progremm: [
          { title: 'МУЛЬТ ТВ. Сезон 4, 7 серия', to: '#', isActive: true },
          { title: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия', to: '#' },
          { title: 'БУРДАШЕВ. Сезон 1, 20 серия', to: '#' },
        ],
      },
      {
        images: '3.png',
        title: 'РБК',
        progremm: [
          {
            title: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
            to: '#',
            isActive: true,
          },
          { title: 'ДЕНЬ. Главные темы', to: '#' },
          { title: 'Главные новости', to: '#' },
        ],
      },
      {
        images: '4.png',
        title: 'AMEDIA PREMIUM',
        progremm: [
          { title: 'Клиент всегда мёртв', to: '#', isActive: true },
          { title: 'Голодные игры: Сойка-пересмешница. Часть I', to: '#' },
          { title: 'Секс в большом городе', to: '#' },
        ],
      },
      {
        images: '4.png',
        title: 'AMEDIA PREMIUM',
        progremm: [
          { title: 'Клиент всегда мёртв', to: '#', isActive: true },
          { title: 'Голодные игры: Сойка-пересмешница. Часть I', to: '#' },
          { title: 'Секс в большом городе', to: '#' },
        ],
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.container {
  overflow-y: scroll;

  height: 80vh;
  margin-top: 2vh;
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 2px;
  border-radius: 2px;
  background: #bdbdbd;
}

::-webkit-scrollbar-thumb:window-inactive {
  background: #bdbdbd;
}

.show_img {
  display: flex;

  flex: 0.5;
  justify-content: center;

  img {
    object-fit: cover;
  }
}

.channel_img {
  display: flex;

  justify-content: right;
}

.channel_item {
  display: flex;

  height: 162px;
  margin-bottom: 1rem;

  border-radius: 8px;
  background: #f2f2f2;

  align-items: center;
  justify-content: space-around;
}

.channel_text {
  display: flex;
  flex-direction: column;

  flex: 1;
}

.fake {
  flex: 0.1;
}

.channel_name {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;

  position: relative;
  bottom: 1vh;
}

.channel_proggram {
  font-family: Rubik;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;

  margin-top: 0.5vh;

  color: #333;
}

.active {
  color: #e5261e;
}
</style>
