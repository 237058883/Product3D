<template>
  <h1>乐享3D模型，体验不一样的视觉盛宴！</h1>
  <div class="icon">
    <div class="icon-list">
      <div class="icon-item" v-for="item in iconlist" :key="item.id">
        <div class="page">
          <div class="icon-btn">
            <img :src="item.url" />
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
    <a-button
      type="primary"
      size="large"
      class="btn"
      @click="this.$router.replace('/loading')"
      >立 即 体 验</a-button
    >
  </div>
</template>

<script>
export default {
  name: "HomeIcon",
  components: {},
  data() {
    return {
      iconlist: [
        {
          id: 1,
          title: "飞机",
          url: require("@/assets/img/home/iconlist/飞机.svg"),
        },
        {
          id: 2,
          title: "坦克",
          url: require("@/assets/img/home/iconlist/坦克.svg"),
        },
        {
          id: 3,
          title: "船",
          url: require("@/assets/img/home/iconlist/轮船.svg"),
        },
        {
          id: 4,
          title: "汽车",
          url: require("@/assets/img/home/iconlist/汽车.svg"),
        },
        {
          id: 5,
          title: "直升机",
          url: require("@/assets/img/home/iconlist/直升机.svg"),
        },
        {
          id: 6,
          title: "自行车",
          url: require("@/assets/img/home/iconlist/自行车.svg"),
        },
        {
          id: 7,
          title: "飞船",
          url: require("@/assets/img/home/iconlist/飞船.svg"),
        },
        {
          id: 8,
          title: "挖掘机",
          url: require("@/assets/img/home/iconlist/挖掘机.svg"),
        },
        {
          id: 9,
          title: "列车",
          url: require("@/assets/img/home/iconlist/列车.svg"),
        },
        {
          id: 10,
          title: "巴士",
          url: require("@/assets/img/home/iconlist/巴士.svg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.icon {
  width: 100%;
  margin: 40px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
h3 {
  font-size: 30px;
}
h1 {
  font-size: 60px;
  text-align: center;
  font-family: "华文彩云";
  color: rgb(22, 157, 211);
  font-weight: 900;
}
.icon-item {
  height: 160px;
  width: 20%;
  align-items: center;
}
.icon-list {
  flex-wrap: wrap;
  display: flex;
}
.icon-btn {
  display: flex;
  height: 80px;
  width: 200px;
  background-color: white;
  border-radius: 8px 8px 30px 8px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.3);
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 90px;
  align-items: center;
  justify-content: center;
  position: relative;
}
.icon-btn img {
  position: absolute;
  width: 120px;
  height: 120px;
  left: -50px;
  top: -50px;
}
.btn {
  height: 80px;
  width: 240px;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 60px;
  border-radius: 30px 3px 30px 3px;
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.3);
}
</style>
