import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import FilmsOn from '@/components/Films-On'
import FilmDetail from '@/components/Film-Detail'
import FilmSearch from '@/components/Film-Search'
import CinemaList from '@/components/Cinema-List'
console.log(FilmsOn)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/filmson',
      name: 'filmson',
      component: FilmsOn
    },
    {
      path: '/filmDetail/:id',
      name: 'fimldetail',
      component: FilmDetail
    },
    {
      path: '/filmSearch',
      name: 'fimeSearch',
      component: FilmSearch
    },
    {
      path: '/cinemaList',
      name: 'cinemaList',
      component: CinemaList
    }
  ]
})
