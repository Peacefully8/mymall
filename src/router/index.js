import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const Home = () => import('views/Home/Home.vue')
const Category = () => import('views/Category/Category')
const Shop = () => import('views/Shop/Shop')
const Profile = () => import('views/Profile/Profile')
const Detail = () => import('views/detail/Detail')


const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
