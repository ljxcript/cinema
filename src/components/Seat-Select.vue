<template>
  <div>
    <x-header>
      选择座位
      <icon type="search" class="film-search-icon" @click.native="filmSearch"></icon>
    </x-header>
  <div class="tips-wrapper">
    <flexbox>
      <flexbox-item :span="1/3"><div class="white-tip tip"><span>&nbsp</span>可选</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="red-tip tip"><span></span>已售</div></flexbox-item>
      <flexbox-item :span="1/3"><div class="green-tip tip"><span></span>已选</div></flexbox-item>
    </flexbox>
  </div>
  <div class="seat-wrapper">
    <div class="row-wrapper" v-for ="r in row">
      <flexbox>
        <flexbox-item :span="1/8">&nbsp&nbsp&nbsp{{r}}</flexbox-item>
        <flexbox-item :span="7/8">
      <checker v-model="seatN" type="checkbox" default-item-class="seat" selected-item-class="seat-selected">
        <checker-item :class="pageIndex === i ? 'acIndex' : 'normIndex'" v-for="c in column"  :value="{row: r, coulumn: c}"></checker-item>
     </checker>
   </flexbox-item>
     </flexbox>
   </div>
   </div>
   <center><x-button mini type="primary" @click.native="confirmBuy">确认购票</x-button></center>
    <bottom-tab></bottom-tab>
  </div>
</template>

<script>
import { Checker, CheckerItem, Flexbox, FlexboxItem, Group, Cell, XInput, XButton, Divider, XHeader, Icon } from 'vux'
import BottomTab from './Bottom-Tab'

export default {
  components: {
    Checker,
    CheckerItem,
    Group,
    Cell,
    XInput,
    XButton,
    Divider,
    XHeader,
    Flexbox,
    FlexboxItem,
    BottomTab,
    Icon
  },
  data () {
    return {
      seatN: '',
      row: 5,
      column: 8,
      msg: 'Hello World!',
      phone: '',
      pswordConfirm: '',
      vcode: '',
      psword: '',
      cinemaList: [
      ],
      seatSelected: [],
      seatOccupied: [{row: 1, column: 5}, {row: 2, column: 3}, {row: 4, column: 7}]
    }
  },
  methods: {
    confirmBuy: function () {
      window.location = '#orderConfirm'
    },
    filmSearch: function () {
      window.location = '#filmSearch'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}

.seat {
  margin: 5px;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.seat-selected {
  border: 1px solid green;
  background-color: rgba(0, 255, 0, 0.2);
}

.seat-occupied {
  border: 1px solid red;
  background-color: rgba(255, 0, 0, 0.2);
}

.seat-wrapper {
  padding-top: 30px;
  text-align: center;
}

.film-search-icon {
  position: absolute;
  right: 10px;
  top: 30%;
}

.tip{
  vertical-align: middle;
  text-align: center;
}

.tips-wrapper {
  padding-top: 10px;
}

.tip span{
  margin-right: 5px;
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.white-tip span{
  border: 1px solid lightgrey;
}

.red-tip span{
  border: 1px solid red;
  background-color: rgba(255, 0, 0, 0.2);
}

.green-tip span{
  border: 1px solid green;
  background-color: rgba(0, 255, 0, 0.2);
}

</style>
