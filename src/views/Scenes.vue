<template>
  <div class="scenes" id="scene"></div>
</template>
<script>
import index3D from "@/utils/index.js";
export default {
  name: "Scenes",
  el: "#scene",
  data() {
    return {
      indexobj: {},
    };
  },
  mounted() {
    this.index3d();
  },
  methods: {
    index3d() {
      this.indexobj = new index3D("#scene");
    },
  },
};
</script>
<style scoped></style>
