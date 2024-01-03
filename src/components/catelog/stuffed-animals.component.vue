<template>
  <div>
    <div class="flex justify-between items-center">
        <h1 class="text-xl md:text-2xl lg:text-3xl">Stuffed Animals</h1>
        <div class="group cursor-pointer" @click="gotoCatelogPage">
            <span class="text-sm">See All Toys 	&rarr;</span>
            <div class="w-full bg-gray-200 rounded-full h-[2px] group-hover:bg-lime-500" />
        </div>
    </div>
    
    <div class="w-full mt-4 md:mt-8 bg-gray-200 rounded-full h-[2px] lg:h-[1.5px]">
        <div class="bg-lime-500 h-[2px] lg:h-[1.5px] rounded" style="width: 15%" />
    </div>
  </div>
</template>

<script setup>
import router from "@/router";

const gotoCatelogPage = () => {
    router.push({"name": "catelog"});
}
</script>

<style>

</style>