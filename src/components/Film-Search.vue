<template>
  <div>
    <search @on-submit="searchFilm" @on-change="getResult" v-model="searchFilmName" :results="results" @result-click="resultClick" position="absolute"></search>

    <h5 class="hot-search-header">热门搜索</h5>
    <div class="hot-search-list">
      <flexbox>
        <flexbox-item v-for="film in filmName" @click.native="filmDetail(film.id)">
          <x-button mini plain >{{film.name}}</x-button>
        </flexbox-item>
      </flexbox>
    </div>
    
    <bottom-tab></bottom-tab>
  </div>
</template>

<script>
import { Search, XButton, Group, Flexbox, FlexboxItem } from 'vux'
import BottomTab from './Bottom-Tab'

export default {
  components: {
    Search,
    XButton,
    Group,
    Flexbox,
    FlexboxItem,
    BottomTab
  },
  data () {
    return {
      filmName: [
        {
          id: 1,
          name: '摔跤吧！爸爸'
        },
        {
          id: 2,
          name: '加勒比海盗5'
        },
        {
          id: 3,
          name: '神奇女侠'
        }
      ],
      searchFilmName: '',
      results: []
    }
  },
  methods: {
    filmDetail: function (id) {
      window.location = '#filmDetail/' + id
    },

    searchFilm: function () {},

    getResult: function (val) {
      let rs = []
      for (let i = 0; i < this.filmName.length; i++) {
        if (this.filmName[i].name.indexOf(val) >= 0) {
          rs.push({
            title: this.filmName[i].name,
            filmId: this.filmName[i].id,
            other: ''
          })
        }
      }
      this.results = rs
    },

    resultClick: function (item) {
      window.location = '#filmDetail/' + item.filmId
    }
  }
}

</script>

<style>
.hot-search-header {
  margin: 10px;
}
.hot-search-list {
  margin-top: 10px;
  padding: 5px;
}
</style>
