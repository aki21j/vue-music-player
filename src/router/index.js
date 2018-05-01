import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Genre from '@/components/Genres/Genre'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/:name',
      name: 'Genre',
      component: Genre
    },
    
  ]
})
