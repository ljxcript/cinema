<template>
  <div>
    <x-header>
      正在热映
      <icon type="search" class="film-search-icon" @click.native="filmSearch"></icon>
    </x-header>

    <div class="vux-demo">
      <img class="banner-img" :src="bannerSrc">
    </div>
    <divider></divider>
    <group class = "film-wrapper" title="" v-for="film in filmList" @click.native="filmDetail(film.id)">
      <divider></divider>
      <flexbox>
        <flexbox-item :span="1/4"> 
         <img class="snapshot" :src="film.img">
        </flexbox-item>
        <flexbox-item :span="3/4">
          <div><strong>{{film.name}}</strong></div>
          <flexbox>
            <flexbox-item :span="3/5">观众评分：<span class = "film-score">{{film.score}}</span></flexbox-item>
            <flexbox-item>
              <x-button mini plain type="primary" @click.native="buyTiket(film.id)">购票</x-button>
            </flexbox-item>
          </flexbox>
          <divider></divider>
          <p>{{film.des}}</p>
        </flexbox-item>
      </flexbox>
      <divider></divider>
    </group>


  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Group, Cell, XInput, XButton, Divider, XHeader, Icon } from 'vux'

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
    Icon
  },
  data () {
    return {
      msg: 'Hello World!',
      phone: '',
      pswordConfirm: '',
      vcode: '',
      psword: '',
      bannerSrc: 'http://p1.meituan.net/movie/cac568b8529570a7c0c71e38e6c48a8e378668.jpg@465w_258h_1e_1c',
      filmList: [
        {
          id: 1,
          name: '摔跤吧！爸爸',
          score: '9.1',
          des: '这个是这部电影的描述',
          img: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2457983084.webp'
        },
        {
          id: 2,
          name: '加勒比海盗5',
          score: '7.4',
          des: '这个是这部电影的描述',
          img: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459723975.webp'
        },
        {
          id: 3,
          name: '神奇女侠',
          score: '9.1',
          des: '这个是这部电影的描述',
          img: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2460006593.webp'
        }
      ]
    }
  },
  methods: {
    buyTiket: function (id) {
      console.log('buying ' + id)
    },
    filmDetail: function (id) {
      window.location = '#filmDetail/' + id
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
.logo {
  width: 100px;
  height: 100px;
}
.banner-img {
  width: 100%;
}
.snapshot {
  width: 100%;
}
.film-score {
  color: red;
}
.film-wrapper {
  padding-left: 10px;
}
</style>
