<template>
  <div class="homeswiper">
    <div class="swiperbg" :style="{ backgroundColor: cbgColor }"></div>
    <a-carousel arrows autoplay :beforeChange="changeFn">
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-outlined />
        </div>
      </template>
      <div class="swiper-item" v-for="item in swiperdata" :key="item">
        <div class="swiper-box">
          <div class="swiper-left">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="swiper-right">
            <img :src="item.url" />
          </div>
        </div>
      </div>
    </a-carousel>
  </div>
</template>

<script>
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";
export default {
  name: "HomeSwiper",
  components: {
    LeftOutlined,
    RightOutlined,
  },
  data() {
    return {
      bgColor: ["orange", "green", "blue", "purple"],
      swiperdata: [
        {
          id: 1,
          title: "网页观看3D",
          url: require("@/assets/img/home/swiper/banner1.png"),
        },
        {
          id: 2,
          title: "实时观看模型",
          url: require("@/assets/img/home/swiper/banner2.png"),
        },
        {
          id: 3,
          title: "体验不同场景",
          url: require("@/assets/img/home/swiper/banner3.png"),
        },
        {
          id: 4,
          title: "海量模型下载",
          url: require("@/assets/img/home/swiper/banner4.png"),
        },
      ],
      cbgColor: "",
    };
  },
  methods: {
    changeFn(from, to) {
      this.cbgColor = this.bgColor[to];
      //console.log(this.swiperdata);
    },
  },
};
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 900px;
  line-height: 600px;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 50px;
  height: 50px;
  font-size: 50px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.homepage {
  position: relative;
  height: 800px;
}
.swiperbg {
  position: absolute;
  display: block;
  width: 100%;
  height: 800px;
  background-color: orange;
  transform-origin: 0 0;
  transform: skew(0, -8deg);
  transition: all 0.5s;
}
.swiper-item {
  height: 800px;
  z-index: 11;
}
.swiper-box {
  display: flex;
  min-width: 1200px;
  justify-content: center;
}
.swiper-left {
  width: 30%;
  display: flex;
  padding-right: 100px;
  flex-direction: column;
  margin-top: 100px;
}
.swiper-right {
  margin-top: 45px;
  transform-origin: 0 100%;
  transform: skew(0, -8deg);
}
.swiper-right img {
  width: 1100px;
  border-bottom-right-radius: 80px;
  border-top-left-radius: 80px;
}
h3 {
  font-size: 60px;
  font-weight: 900;
  margin: 0;
}
</style>
