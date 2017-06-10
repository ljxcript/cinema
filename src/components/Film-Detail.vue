<template>
  <div>
    <x-header>电影详情</x-header>
    <divider></divider>
    <div class="vux-demo">
      <p><strong>{{filmDetail.name}}</strong></p>
    </div>
    <group class = "film-wrapper" title="">
      <flexbox>
        <flexbox-item :span="1/4"> 
         <img class="snapshot" :src="filmDetail.img">
        </flexbox-item>
        <flexbox-item :span="3/4">
          <divider></divider>
          <flexbox>
            <flexbox-item :span="3/5">观众评分：<span class = "film-score">{{filmDetail.score}}</span></flexbox-item>
            <flexbox-item>
              <x-button mini plain type="primary" @click.native="buyTiket(filmDetail.id)">直接购票</x-button>
            </flexbox-item>
          </flexbox>
          <p>{{filmDetail.year}}</p>
          <p>{{filmDetail.type}}</p>
          <p>{{filmDetail.area}}</p>
          <p>上映时间：{{filmDetail.showTime}}</p>
          <divider></divider>
        </flexbox-item>
      </flexbox>
    </group>
    <divider></divider>
    <group title="电影简介">
      <divider></divider>
      <p class="film-des">{{filmDetail.des}}</p>
      <divider></divider>
    </group>
    <group title="演员列表">
      <p v-for="ac in filmDetail.actors"><img :src="ac.profile" class="actor-profile">{{ac.name}}</p>
    </group>
    <divider></divider>
    <group title="热门影评">
      <p class="comment-wrapper" v-for="comment in filmDetail.comments">{{comment}}</p>
      <divider></divider>
    </group>
    <bottom-tab></bottom-tab>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Group, Cell, XInput, XButton, Divider, XHeader } from 'vux'
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
    BottomTab
  },
  data () {
    return {
      msg: 'Hello World!',
      phone: '',
      pswordConfirm: '',
      vcode: '',
      psword: '',
      filmDetail:
      {
        id: 1,
        name: '摔跤吧！爸爸',
        score: '9.1',
        year: 2017,
        type: '剧情',
        area: '印度',
        showTime: '2017-05-05',
        des: '马哈维亚（阿米尔·汗 Aamir Khan 饰）曾经是一名前途无量的摔跤运动员，在放弃了职业生涯后，他最大的遗憾就是没有能够替国家赢得金牌。马哈维亚将这份希望寄托在了尚未出生的儿子身上，哪知道妻子接连给他生了两个女儿，取名吉塔（法缇玛·萨那·纱卡 Fatima Sana Shaikh 饰）和巴比塔（桑亚·玛荷塔 Sanya Malhotra 饰）。让马哈维亚没有想到的是，两个姑娘展现出了杰出的摔跤天赋，让他幡然醒悟，就算是女孩，也能够昂首挺胸的站在比赛场上，为了国家和她们自己赢得荣誉。 ',
        img: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2457983084.webp',
        actors: [
          {
            name: '阿米尔',
            profile: 'https://img1.doubanio.com/img/celebrity/medium/13628.jpg'
          },
          {
            name: '涅提·蒂瓦里',
            profile: 'https://img3.doubanio.com/img/celebrity/medium/1484120321.24.jpg'
          }
        ],
        comments: [
          '好看死了。拜托大家认真看完电影再做评论。爸爸有约定一年为期，不行就不勉强。吉塔在赢得了第一场摔跤比赛之后，也主动请爸爸带自己参赛。她们已经自己选择了自己的道路，被父母逼着选了专业还怂着不敢转型的朋友，你跟人家根本没有半点共鸣的好吧。另外，脱离印度实际环境谈女不女权根本没有意义。',
          '在印度看得169分钟，一部处处衬着男权和父权的女性电影，女儿没有任何选择权，被父亲残暴地教育成为世界冠军，这个冠军的“正确“结果就意味着父亲教育的正确了。意外这部电影宣传期在国内口碑这么好，大家去看完整版吧认知会反转的',
          '最惊讶的是放印度国歌的时候电影院几乎所有人都站起来了。。'
        ]
      }
    }
  },
  methods: {
    buyTiket: function (id) {
      console.log('buying ' + id)
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
.film-des {
  padding:10px;
}
.comment-wrapper {
  padding: 10px 10px;
  opacity: 0.8;
  border-bottom: 1px solid rgba(0,0,0,.2);
}
.actor-profile {
  height: 150px;
  margin: 10px 30px;
  vertical-align: middle;
}
</style>
