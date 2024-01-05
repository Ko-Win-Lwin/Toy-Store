<template>
    <div class="mt-8 mx-4 lg:mx-16 ">
        <nav class="flex py-2 md:py-3 lg:py-4 px-5 border rounded-[30px]" aria-label="Breadcrumb">
        <ol class="flex gap-3 items-center text-slate-500 text-[11px] md:text-sm">
            <li class="flex gap-2 justify-center items-center">
                <router-link :to="{'name': 'home'}">Home</router-link>
                <i class="fa-solid fa-right-long text-slate-300 text-[10px] mt-1"></i>
            </li>
            <li class="">
                <router-link :to="{'name': `${props.route.name}`}">{{ props.route.name.charAt(0).toUpperCase() + props.route.name.slice(1)  }}</router-link>
            </li>
            
        </ol>
        </nav>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps(['route'])

// onMounted( () => {
//     console.log(props.route.name)
// })




</script>

<style>

</style>