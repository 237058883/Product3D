<template>
  <div class="header" :class="{ hidden: $store.state.isFullscreen }">
    <div class="logo" @click="router.push('/')">
      <img src="~assets/img/three.png" />
    </div>
    <a-input-search
      v-model:value="value"
      placeholder="搜索"
      class="input-search"
      enter-button
      @search="onSearch"
    />
    <a-menu v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item key="account">
        <template #icon>
          <user-outlined />
        </template>
        账户
      </a-menu-item>
      <a-menu-item key="set">
        <template #icon> <setting-outlined /> </template>
        设置
      </a-menu-item>
      <a-menu-item key="helpe">
        <template #icon>
          <question-circle-outlined />
        </template>
        帮助
      </a-menu-item>
      <a-menu-item key="about">
        <template #icon>
          <smile-outlined />
        </template>
        关于
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  SmileOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "Header",
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    UserOutlined,
    SmileOutlined,
  },
  data() {
    return {
      value: "",
      current: ["help"],
    };
  },
  methods: {
    onSearch() {},
  },
};
</script>
<style scoped>
.header {
  display: flex;
  text-align: center;
  justify-content: space-between;
  position: fixed;
  z-index: 90;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(136, 136, 136, 0.3);
}
.logo img {
  padding: 5px 30px 5px;
  height: 50px;
}
.input-search {
  display: flex;
  flex: 1;
  height: 50px;
  align-items: center;
}
.header.hidden {
  transform: translate(0, -80px);
  transition: all 0.5s;
}
</style>
