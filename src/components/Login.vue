<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/logo.png">
      <h3> 电影购票系统</h3>
    </div>
    <group title="">
      <x-input title="账号" v-model="usrname"></x-input>
    </group>
    <group title="">
      <x-input title="密码" v-model="psword"></x-input>
    </group>
    <divider></divider>
    <x-button type="primary" @click.native="login">登录</x-button>
    <divider></divider>
    <x-button  plain type="primary" @click.native="gotoRegister">注册</x-button>
  </div>
</template>

<script>
import { Group, Cell, XInput, XButton, Divider } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XInput,
    XButton,
    Divider
  },
  data () {
    return {
      msg: 'Hello World!',
      usrname: '',
      psword: ''
    }
  },
  methods: {
    gotoRegister: function () {
      console.log('executing')
      window.location = '#register'
    },
    isValid: function () {
      console.log('validating the form data')
    },
    login: function () {
      window.location = '#filmson'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
