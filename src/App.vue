<template>
  <el-container id="app">
    <router-view v-if="$route.meta.single"/>
    <el-container v-else>
      <el-header height="70px">
        <router-view name="header"/>
      </el-header>
      <el-container>
        <router-view name="body"/>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {};
    }
};
</script>

<style>
html,
body {
    height: 100%;
    min-width: 1200px;
    overflow: hidden;
}
#app {
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 12px;
    color: #333;
}
</style>

