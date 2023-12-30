<template>
  <div class="bg-lime-500 lg:pt-12 lg:pb-6 text-white lg:px-12 fixed w-full bottom-0">
    <div class="flex justify-between items-center">
        <div>
            <router-link :to="{'name': 'home'}">
                <h1 class="text-2xl">ToyStore</h1>
            </router-link>
        </div>
        <div class="navigation-links hidden justify-start items-center text-sm gap-10 lg:flex">
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
        <div class="social-links flex justify-items-center items-center gap-3">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
    </div>

    <div class="w-full mt-12 bg-gray-200 rounded-full h-[0.9px] opacity-75" />

    <div class="mt-6 text-[12px]">
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