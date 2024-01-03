<template>
  <div class="bg-lime-500 pt-8 pb-4 md:pt-12 md:pb-6 px-4 lg:pt-12 lg:pb-6 text-white lg:px-12 ">
    <div class="flex flex-col md:flex-row md:flex-wrap  lg:justify-between md:items-center gap-6">
        <div class="grow lg:grow-0 md:mr-[30%] lg:mr-auto">
            <router-link :to="{'name': 'home'}">
                <h1 class="text-2xl lg:text-3xl">ToyStore</h1>
            </router-link>
        </div>
        <div class="navigation-links flex justify-start gap-5 lg:gap-8 items-center text-sm lg:text-base">
            <router-link :to="{'home': 'home'}">
                <div class="hover:underline">Home</div>
            </router-link>
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
        <div class="social-links flex justify-items-center items-center gap-3 md:ml-auto">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
    </div>

    <div class="w-full mt-12 bg-gray-200 rounded-full h-[1px] opacity-75" />

    <div class="mt-2 text-[11px]">
        <p>
            Created with love by <a href="http://www.google.com" target="_blank">Win Lwin</a>
        </p>
    </div>
  </div>

</template>

<script setup>
import { RouterLink } from "vue-router";

</script>

<style>

</style>