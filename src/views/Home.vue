<template>
  <div>
    <div class="homepage">
      <HomeSwiper></HomeSwiper>
      <HomeIcon></HomeIcon>
    </div>
  </div>
</template>
<script>
import HomeSwiper from "components/Home/HomeSwiper.vue";
import HomeIcon from "components/Home/HomeIcon.vue";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeIcon,
  },
};
</script>

<style scoped>
.homepage {
  padding-top: 50px;
}
</style>
