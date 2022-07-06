<template>
  <div>
    <div class="">
      <LoadingBg></LoadingBg>
    </div>
  </div>
</template>
<script>
import LoadingBg from "components/Product/LoadingBg.vue";
export default {
  name: "Loading",
  components: {
    LoadingBg,
  },
  data() {
    return {
      count: "",
    };
  },
  created() {
    this.countDown(); // 倒计时
  },
  methods: {
    countDown() {
      const TIME_COUNT = 1;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.timer = setInterval(() => {
          if (this.count > 1 && this.count <= TIME_COUNT) {
            //限制倒计时区间
            this.count--;
          } else {
            clearInterval(this.timer); //删除定时器
            this.timer = null;
            //跳转的页面写在此处
            this.$router.replace("/product");
          }
        }, 1000);
      }
    },
  },
};
</script>

<style scoped></style>
