<template>
  <div class="bottom-tab">
    <tabbar>
      <tabbar-item link='/filmson'>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link='/cinema'>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">影院</span>
      </tabbar-item>
      <tabbar-item link='/personalCenter'>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}

</script>

<style>
.bottom-tab {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
