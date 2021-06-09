import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/About',
    name: 'About',
    component: About
  },

  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },

  {
    path: '/Skills',
    name: 'Skills',
    component: Skills
  },

  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }

]

const router = new VueRouter({
  routes
})

export default router
