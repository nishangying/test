import Vue from 'vue'
import Router from 'vue-router'




Vue.use(Router)

const life = () => import('../view/home/components/life.vue')
const home = () => import('../view/home/index.vue')
const hessay = () => import('../view/home/components/essay.vue')
const speak = () => import('../view/home/components/speak.vue')
const dream = () => import('../view/home/components/dream.vue')
const skill = () => import('../view/home/components/skill.vue')
// -----------------------------blog-----------------------------
const index = () => import('../view/blog/index.vue')
const blog = () => import('../view/blog/home.vue')
const essay = () => import('../view/blog/components/essay.vue')
const album = () => import('../view/blog/components/album.vue')
const scrollpage = () => import('../view/blog/scroll.vue')
const scrollphoto = () => import('../view/blog/scrollphoto.vue')
const word = () => import('../view/blog/word.vue')
const vuexPage = () => import('../view/blog/components/vuexpage.vue')



const albumpage = () => import('../view/album/index.vue')




export default new Router({

  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect:'/hessay',
      children:[
        {
          path: '/hessay',
          name: 'hessay',
          component: hessay,
        },
        {
          path: '/life',
          name: 'life',
          component: life,
        },
        {
          path: '/speak',
          name: 'speak',
          component: speak,
        },
        {
          path: '/dream',
          name: 'dream',
          component: dream,
        },
        {
          path: '/skill',
          name: 'skill',
          component: skill,
        }
      ]
    },
    
    {
      path: '/blog',
      name: 'blog',
      component: blog,
      redirect:'/essay',
      children:[
        {
          path: '/essay',
          name: 'essay',
          component: essay,
        },
        {
          path: '/album',
          name: 'album',
          component: album,
        },
        {
          path: '/vuexPage',
          name: 'vuexPage',
          component: vuexPage,
        },
      ]
    },
    {
      path: '/scrollpage',
      name: 'scrollpage',
      component: scrollpage,
    },
    {
      path: '/scrollphoto',
      name: 'scrollphoto',
      component: scrollphoto,
    },
    {
      path: '/word',
      name: 'word',
      component: word,
    },
    {
        path:'/albumpage',
        name: 'albumpage',
        component: albumpage,
    },
    // {
    //   path:'/life',
    //   name: 'life',
    //   component: life,
    // }
  ]
})
