<template>
  <div>
    <x-header>
      影院列表
      <icon type="search" class="film-search-icon" @click.native="filmSearch"></icon>
    </x-header>

    <group class="cineme-wrapper" title="" v-for="cinema in cinemaList" @click.native="cinemaDetail(cinema.id)">
      <divider></divider>
      <flexbox class = "cinema-box">
        <flexbox-item :span="5/6">
          <p class="cinema-name">{{cinema.name}}</p>
          <p class="cinema-address">{{cinema.address}}</p>
          <p class="cinema-priceRange">{{cinema.priceRange}}</p>
        </flexbox-item>
        <flexbox-item :span="1/6">
          <span class="cinema-score">{{cinema.score}}</span>
          <span class="cinema-distance">{{cinema.distance}}</span>
        </flexbox-item>
      </flexbox>
      <divider></divider>
    </group>

    <bottom-tab></bottom-tab>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Group, Cell, XInput, XButton, Divider, XHeader, Icon } from 'vux'
import BottomTab from './Bottom-Tab'

export default {
  components: {
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
      msg: 'Hello World!',
      phone: '',
      pswordConfirm: '',
      vcode: '',
      psword: '',
      cinemaList: [
        {
          id: 1,
          name: '金逸珠江国际影城-广州大学城店',
          score: '3.0',
          distance: '400m',
          address: '大学城GOGO新天地商业广场三层第3A028号',
          priceRange: '￥30-35'
        },
        {
          id: 2,
          name: '飞扬影院-正佳店',
          score: '8.0',
          distance: '10km',
          address: '天河区正佳广场7楼',
          priceRange: '￥50-100'
        },
        {
          id: 3,
          name: '金逸珠江国际影城-广州大学城店',
          score: '3.0',
          distance: '400m',
          address: '大学城GOGO新天地商业广场三层第3A028号',
          priceRange: '￥30-35'
        },
        {
          id: 4,
          name: '金逸珠江国际影城-广州大学城店',
          score: '3.0',
          distance: '400m',
          address: '大学城GOGO新天地商业广场三层第3A028号',
          priceRange: '￥30-35'
        }
      ]

    }
  },
  methods: {
    cinemaDetail: function (id) {
      window.location = '#cinemaDetail/' + id
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

.film-search-icon {
  position: absolute;
  right: 10px;
  top: 30%;
}

.cinema-wrapper {
  margin-top: 0;
}
.cinema-box {
  padding-left: 10px;
  margin-top: 0;
}

.cinema-address {
  font-weight: lighter;
  font-size: 10pt;
  color: #aaaaaa;
  margin-top: 5px;
}

.cinema-score {
  font-size: 16pt;
  color: orange;
}

.cinema-distance {
  font-weight: lighter;
  font-size: 12pt;
  color: #aaaaaa;
}
.cinema-priceRange {
  font-weight: lighter;
  color: #aaaaaa;
}

</style>
