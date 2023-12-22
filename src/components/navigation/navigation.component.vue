<template> 
    <div class="relative z-10 bg-white flex justify-between items-center lg:block" :class="{'shadow': !isDropDown}">
        <div class="py-4 px-5 lg:px-20 border-r lg:border-none flex justify-between items-center gap-24 md:flex-grow lg:justify-around lg:gap-0  text-slate-700">
            <div class="">
                <router-link :to="{'name': 'home'}">
                    <h1 class="text-2xl text-slate-700">ToyStore</h1>
                </router-link>
            </div>

            <div class="navigation-links hidden justify-start items-center text-sm gap-10 flex-grow ml-16 lg:flex">
                <router-link :to="{'name': 'catelog'}">
                    <div class="hover:underline">Catalog</div>
                </router-link>

                <router-link :to="{'name': 'delivery'}">
                    <div class="hover:underline">Delivery</div>
                </router-link>

                <router-link :to="{'name': 'about'}">
                    <div class="hover:underline">About</div>
                </router-link>

                <router-link :to="{'name': 'contacts'}">
                    <div class="hover:underline">Contacts</div>
                </router-link>
            </div>

            <div class="flex items-center gap-5 text-sm">
                <router-link :to="{'name': 'cart'}">
                    <div>Cart</div>
                </router-link>

                <router-link :to="{'name': 'cart'}">
                    <div>
                        <i class="fa-solid fa-cart-shopping text-lg"></i>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="mx-auto md:mx-8 lg:hidden cursor-pointer">
            <i class="fa-solid fa-bars text-lg" @click="showDropDown"></i>
        </div>
    </div>

    <div class="absolute top-[-118px] w-full bg-white text-sm text-slate-700 lg:hidden transition-all duration-[0.5s]" :class="{'drop-down': isDropDown }">
        <router-link :to="{'name': 'catelog'}">
            <div class="py-3 px-5 border-b border-t border-slate-200" @click="hideDropDown">Catalog</div>
        </router-link>

        <router-link :to="{'name': 'delivery'}">
            <div class="py-3 px-5 border-b border-slate-200" @click="hideDropDown">Delivery</div>
        </router-link>

        <router-link :to="{'name': 'about'}">
            <div class="py-3 px-5 border-b border-slate-200" @click="hideDropDown">About</div>
        </router-link>

        <router-link :to="{'name': 'contacts'}">
            <div class="py-3 px-5 border-b border-slate-200" @click="hideDropDown">Contacts</div>
        </router-link>
    </div>
    
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const isDropDown = ref(false)

const showDropDown = () => {
    isDropDown.value = !isDropDown.value
}

const hideDropDown = () => {
    if (isDropDown.value) {
        isDropDown.value = false
    }
}
</script>

<style>
.drop-down {
    top: 64px;
    transition: all 0.5s ;
}
</style>