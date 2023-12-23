<template>
    <div class="bg-white py-12 px-10 w-[90%] md:w-[75%] lg:w-[70%] mx-auto rounded-2xl lg:rounded-lg shadow text-center ">
        <p class="text-lime-500 text-sm lg:text-base mb-5 lg:mb-0">Say hello to ToyStore!</p>
        <h1 class="text-[30px] lg:text-[40px] leading-tight">Free Ecommerce Template for Webflow</h1>
        
        <router-link :to="{name: 'catelog'}">
            <div class="mt-8 open-catelog-btn">
                <span class="bg-lime-500 py-4 px-5 rounded-[25px] text-white">Open Catelog</span>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style>
.open-catelog-btn:hover {
    transition: all 0.5s;
    transform: scale(1.1);
}
</style>