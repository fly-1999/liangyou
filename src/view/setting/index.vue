<style lang="less">
@import "./seting.less";
</style>

<template>
  <div class="wrapper setPdLeft">
    <div id="setingName" class="setingName">
      <!-- <router-link to="{path:'/setting/setingList'}">基本设置</router-link>
      <router-link to="{path:'/setting/setingUser'}">用户管理</router-link> -->
      <router-link to="/setting/setingList">基本设置</router-link>
      <router-link to="/setting/setingUser">用户管理</router-link>

    </div>
    <div>
       <router-view></router-view>
    </div>
    <!-- 页码组件应该是国际化的bug，中文显示不正常 -->
    <!-- <Page :total="100" :show-total='true' show-elevator></Page> -->
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {},
};
</script>

<style scoped>
</style>
