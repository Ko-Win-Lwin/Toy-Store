import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/home/home.component.vue'
import Catelog from '@/components/catelog/catelog.component.vue'
import Delivery from '@/components/delivery/delivery.component.vue'
import About from '@/components/about/about.component.vue'
import Contacts from '@/components/contacts/contacts.component.vue'
import Cart from '@/components/cart/cart.component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/catelog",
      name: "catelog",
      component: Catelog
    }, 

    {
      path: "/delivery",
      name: "delivery",
      component: Delivery
    }, 
    
    {
      path: "/about",
      name: "about",
      component: About
    },

    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    }, 

    {
      path: "/cart",
      name: "cart",
      component: Cart
    }
  ]
})

export default router
