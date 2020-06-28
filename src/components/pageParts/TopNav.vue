<template>
  <div class="nav">
    <router-link
      v-for="link in links"
      :key="link.to"
      active-class="active"
      class="nav_item"
      :exact="link.exact"
      :to="link.to"
    >{{ link.title }}</router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Фильмы", to: "/", exact: true },
      { title: "Телеконалы", to: "/channels" }
    ]
  })
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
}

.nav_item {
  font-family: Rubik;
  font-size: 28px;
  font-weight: 500;
  line-height: 33px;

  position: relative;

  margin-left: 2vw;

  color: #333;
}

.active {
  color: #e5261e;
  border-bottom: 1px solid #e5261e;
}
</style>
