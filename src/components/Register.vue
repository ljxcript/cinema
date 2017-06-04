<template>
  <div>
    <x-header>注册新账号</x-header>
    <div class="vux-demo">
      <img class="logo" src="../assets/logo.png">
      <h3> </h3>
    </div>
    <group title="手机号">
      <x-input title="输入您的手机号" v-model="phone"></x-input>
    </group>
    <group title="验证码" class="weui-cells_form">
      <x-input title="发送验证码" class="weui-vcode" v-model="vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group>
    <group title="密码">
      <x-input title="设置密码" v-model="psword"></x-input>
      <x-input title="再次确认密码" v-model="pswordConfirm"></x-input>
    </group>
    <divider></divider>
    <x-button type="primary">注册</x-button>
  </div>
</template>

<script>
import { Group, Cell, XInput, XButton, Divider, XHeader } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XInput,
    XButton,
    Divider,
    XHeader
  },
  data () {
    return {
      msg: 'Hello World!',
      phone: '',
      pswordConfirm: '',
      vcode: '',
      psword: ''
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
