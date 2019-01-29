<template>
  <div class="app-container">

    <!-- 顶部 header 区域-->
    <mt-header fixed title="固定在顶部"></mt-header>

    <!-- 路由 router-view 区域 -->

    <!-- 底部 tablebar 区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="#/shopcart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>


    <h1>这是 App 组件</h1>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
  .app-container{
    padding-top: 40px;
  }
</style>
