<template>
  <div>
    <x-header>订单确认</x-header>
    <form-preview header-label="付款金额" header-value="¥30.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
    <br>

  </div>
</template>


<script>
import { FormPreview, XHeader } from 'vux'

export default {
  components: {
    FormPreview,
    XHeader
  },
  data () {
    return {
      list: [{
        label: '电影名称',
        value: '神奇女侠'
      }, {
        label: '放映时间',
        value: '6月20日 19:00'
      }, {
        label: '影院',
        value: '金逸珠江国际影城-广州大学城店'
      }, {
        label: '地址',
        value: '大学城GOGO新天地商业广场三层第3A028号'
      }, {
        label: '联系方式',
        value: '15532342189'
      }],
      buttons1: [{
        style: 'default',
        text: '取消订单',
        link: '/filmsOn'
      }, {
        style: 'primary',
        text: '确认',
        link: '/'
      }],
      buttons2: [{
        style: 'primary',
        text: '点击事件',
        onButtonClick: function (name) {
          console.log(111)
        }
      }]
    }
  }
}
</script>

<style>

</style>
