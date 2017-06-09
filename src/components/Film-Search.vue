<template>
  <div>
    <search ></search>
  </div>
</template>

<script>
import { Search } from 'vux'

export default {
  components: {
    Search
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
