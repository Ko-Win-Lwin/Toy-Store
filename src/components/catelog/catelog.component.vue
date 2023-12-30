<template>
    <Breadcrumb  :route="route"/>
    <div class="mt-20 px-5 lg:px-16 mb-10">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl lg:text-3xl">All Toys</h1>
            <div class="cursor-pointer flex gap-8 justify-center items-center text-sm" @click="gotoCatelogPage">
                <span class="py-2 px-3" :class="{'bg-lime-500 rounded-[20px]' : allToys}" @click="chooseCategory('all')">All Toys</span>
                <span class="py-2 px-3" :class="{'bg-lime-500 rounded-[20px]' : woodenToys}" @click="chooseCategory('wooden')">Wooden Toys</span>
                <span class="py-2 px-3" :class="{'bg-lime-500 rounded-[20px]' : stuffedAnimals}" @click="chooseCategory('stuffed')">Stuffed Animals</span>
            </div>
        </div>
        
        <div class="w-full mt-8 bg-gray-200 rounded-full h-[2px] lg:h-[1.5px]">
            <div class="bg-lime-500 h-[2px] lg:h-[1.5px] rounded" style="width: 15%" />
        </div>

        <div>
            <div v-if="allToys">
                al toys
            </div>
            <div v-if="woodenToys">
                wooden toys
            </div>
            <div v-if="stuffedAnimals">
                stuffed animals
            </div>
        </div>
    </div>

    
    <Footer/>
</template>

<script setup>

import { useRoute } from 'vue-router';
import Breadcrumb from '../navigation/breadcrumb.component.vue';
import Footer from "../footer/footer.component.vue"
import { ref } from 'vue';

const allToys = ref(true)
const woodenToys = ref(false)
const stuffedAnimals = ref(false)

const chooseCategory = (category) => {
    category === "all" ? allToys.value = true : allToys.value = false;
    category === "wooden" ? woodenToys.value = true : woodenToys.value = false;
    category === "stuffed" ? stuffedAnimals.value = true : stuffedAnimals.value = false
}

const route = useRoute()

// onMounted(() => {
//     console.log(routeName.name)
// })
</script>