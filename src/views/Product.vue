<template>
  <div>
    <div class="products" id="product">
      <div class="prod-list" :class="{ hidden: $store.state.isFullscreen }">
        <h1><CrownOutlined /> 模型展示</h1>
        <div class="product">
          <div
            class="prod-item"
            :class="{ active: mi == modelId }"
            v-for="(prod, mi) in products"
            :key="prod.id"
            @click="changeModel(prod, mi)"
          >
            <div class="prod-title">
              {{ prod.title }}
            </div>
            <div class="prod-img">
              <img :src="prod.url" :alt="prod.title" />
            </div>
            <a-button type="primary" block @click="downLoadi">
              <template #icon>
                <DownloadOutlined />
              </template>
              Download
            </a-button>
          </div>
        </div>
      </div>
      <div class="scene-list" :class="{ hidden: $store.state.isFullscreen }">
        <h1><CodeSandboxOutlined /> 切换场景</h1>
        <div class="scenes">
          <div
            class="scene-item"
            v-for="(scene, si) in scenes"
            :key="scene.id"
            @click="changeHdr(scene, si)"
          >
            <img
              :src="scene.url"
              :alt="scene.title"
              :class="{ active: si == hdrId }"
            />
          </div>
        </div>
      </div>
      <div class="tips-list" :class="{ hidden: $store.state.isFullscreen }">
        <div class="tips">
          <div class="tips-item">
            <h3>滚动滚轮开始体验！</h3>
            <h3>按住鼠标左键，改变视角</h3>
            <h3>按住鼠标右键，改变位置</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import index3D from "@/utils/index.js";
import {
  DownloadOutlined,
  CrownOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "Product",
  components: {
    DownloadOutlined,
    CrownOutlined,
    CodeSandboxOutlined,
  },
  mounted() {
    window.addEventListener("mousewheel", (e) => {
      if (e.deltaY < 0) {
        store.commit("setFullscreen", true);
      }
      if (e.deltaY > 0) {
        store.commit("setFullscreen", false);
      }
      // console.log(e);
    });
    this.index3d();
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "跑车",
          url: require("@/assets/img/product/prod1.jpg"),
        },
        {
          id: 2,
          title: "帆船",
          url: require("@/assets/img/product/prod2.jpg"),
        },
        {
          id: 3,
          title: "战斗机",
          url: require("@/assets/img/product/prod3.jpg"),
        },
        {
          id: 4,
          title: "轿车",
          url: require("@/assets/img/product/prod4.jpg"),
        },
        {
          id: 5,
          title: "宇宙飞船",
          url: require("@/assets/img/product/prod5.jpg"),
        },
      ],
      scenes: [
        {
          id: 1,
          url: require("@/assets/img/product/scene0.jpg"),
        },
        {
          id: 2,
          url: require("@/assets/img/product/scene1.jpg"),
        },
        {
          id: 3,
          url: require("@/assets/img/product/scene2.jpg"),
        },
        {
          id: 4,
          url: require("@/assets/img/product/scene3.jpg"),
        },
        {
          id: 5,
          url: require("@/assets/img/product/scene4.jpg"),
        },
        {
          id: 6,
          url: require("@/assets/img/product/scene5.jpg"),
        },
      ],
      modelId: 0,
      hdrId: 0,
      indexobj: {},
    };
  },
  methods: {
    changeModel(prod, mi) {
      this.modelId = mi;
      //console.log(mi, prod.id, this.indexId);
      this.indexobj.setModel(this.modelId);
    },
    index3d() {
      this.indexobj = new index3D("#product");
    },
    changeHdr(scene, si) {
      this.hdrId = si;
      this.indexobj.setEnvMap(this.hdrId);
    },
    downLoadi() {
      window.alert("该功能未完善！点击确认返回");
    },
  },
};
</script>
<style scoped>
.prod-list {
  width: 400px;
  height: 100vh;
  padding: 60 0 0;
  position: fixed;
  transition: all 0.3s;
  background: rgba(221, 221, 221, 0.2);
  box-shadow: 5px 5px 5px rgba(136, 136, 136, 0.5);
  left: 0;
  z-index: 50;
  margin-top: 50px;
}
.prod-list.hidden {
  transform: translate(-100%);
}
.prod-img img {
  height: 100px;
  width: 200px;
  padding: 2px 0px 2px;
}
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.prod-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(136, 136, 136, 0.3);
  transition: all 0.3s;
  margin-bottom: 10px;
}
.prod-item.active {
  box-shadow: 5px 5px 5px rgba(0, 162, 255, 0.8);
}
.prod-img img:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 5px rgba(136, 136, 136, 0.3);
  cursor: pointer;
}
.prod-title {
  font-size: 16px;
}
.tips-list {
  height: 200px;
  padding: 60 0 0;
  position: fixed;
  transition: all 0.3s;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  background: rgba(221, 221, 221, 0);
  margin-top: 50px;
}
.tips {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 200px;
}
.tips-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin-top: 50px;
  background-color: rgba(250, 250, 250, 0.3);
}
.tips-list.hidden {
  transform: translate(0, -800px);
  transition: all 0.5s;
}
.scenes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.scene-list {
  width: 400px;
  height: 100vh;
  padding: 60 0 0;
  position: fixed;
  transition: all 0.3s;
  background: rgba(221, 221, 221, 0.2);
  box-shadow: -5px 5px 5px rgba(136, 136, 136, 0.5);
  right: 0;
  z-index: 50;
  margin-top: 50px;
}
.scene-list.hidden {
  transform: translate(100%);
}
.scene-item {
  padding: 6px 0;
}
.scene-item img.active {
  box-shadow: -5px 5px 5px rgba(0, 162, 255, 0.8);
}
.scene-item img {
  width: 250px;
  box-shadow: -5px 5px 5px rgba(136, 136, 136, 0.3);
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
}
.scene-item :hover {
  transform: translate(0, -5px);
  box-shadow: -4px 4px 5px rgba(136, 136, 136, 0.5);
}
h1 {
  padding: 5px 0 5px;
  background-color: rgb(255, 255, 255);
  align-items: center;
  text-align: center;
}
h3 {
  font-size: 32px;
  color: #fff;
}
</style>
