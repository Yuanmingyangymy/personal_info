import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import("../components/Information.vue")    //懒加载
const login = () => import("../components/Register.vue")

const routes = [
  {
    path: '',
    redirect: '/login'   //重定向
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//解决相同路径跳转报错问题
//使用push的方法
const RouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return RouterPush.call(this, to).catch(err => err)
}

//使用replace的方法
const RouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return RouterReplace.call(this, to).catch(err => err)
}

export default router

