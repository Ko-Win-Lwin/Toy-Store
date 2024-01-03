<template>
    <Breadcrumb  :route="route"/>
    <div class="mt-20 px-5 lg:px-16 mb-10">
        <div class="flex justify-between items-center">
            <h1 class="text-2xl lg:text-3xl">All Toys</h1>
            <div class="cursor-pointer flex gap-8 justify-center items-center text-sm" @click="gotoCatelogPage">
                <span class="py-2 px-3" :class="{'bg-lime-500 rounded-[20px]' : isAllToys}" @click="chooseCategory('all')">All Toys</span>
                <span class="py-2 px-3" :class="{'bg-lime-500 rounded-[20px]' : isWoodenToys}" @click="chooseCategory('wooden')">Wooden Toys</span>
                <span class="py-2 px-3" :class="{'bg-lime-500 rounded-[20px]' : isStuffedAnimals}" @click="chooseCategory('stuffed')">Stuffed Animals</span>
            </div>
        </div>
        
        <div class="w-full mt-8 bg-gray-200 rounded-full h-[2px] lg:h-[1.5px]">
            <div class="bg-lime-500 h-[2px] lg:h-[1.5px] rounded" style="width: 15%" />
        </div>

        <div class="all_toys">
            <div v-if="isAllToys" class="grid grid-col-1 lg:grid-cols-4 md:grid-col2">
                <div v-for="toy in allToys" :key="toy" class="">
                   <ItemCard>
                    <template #product_image>
                        <img  :src='toy.url' alt="" class="w-[200px] h-[200px]">
                    </template>

                    <template #product_name>
                        <span>{{ toy.name }}</span>
                    </template>

                    <template #price_tag>
                        <PriceTag>
                            <template #price_tag>$ {{toy.price}} USD</template>
                        </PriceTag>
                    </template>
                   </ItemCard>
                </div>
            </div>

        </div>

        <div class="stuffed">
            <div v-if="isStuffedAnimals" class="grid grid-col-1 lg:grid-cols-4 md:grid-col2">
                <div v-for="toy in stuffedAnimals" :key="toy" class="">
                   <ItemCard>
                    <template #product_image>
                        <img  :src='toy.url' alt="" class="w-[200px] h-[200px]">
                    </template>

                    <template #product_name>
                        <span>{{ toy.name }}</span>
                    </template>

                    <template #price_tag>
                        <PriceTag>
                            <template #price_tag>$ {{toy.price}} USD</template>
                        </PriceTag>
                    </template>
                   </ItemCard>
                </div>
            </div>

        </div>

        <div class="wooden">
            <div v-if="isWoodenToys" class="grid grid-col-1 lg:grid-cols-4 md:grid-col2">
                <div v-for="toy in woodenToys" :key="toy" class="">
                   <ItemCard>
                    <template #product_image>
                        <img  :src='toy.url' alt="" class="w-[200px] h-[200px]">
                    </template>

                    <template #product_name>
                        <span>{{ toy.name }}</span>
                    </template>

                    <template #price_tag>
                        <PriceTag>
                            <template #price_tag>$ {{toy.price}} USD</template>
                        </PriceTag>
                    </template>
                   </ItemCard>
                </div>
            </div>

        </div>
    </div>

    
    <Footer/>
</template>

<script setup>

import { useRoute } from 'vue-router';
import Breadcrumb from '../navigation/breadcrumb.component.vue';
import ItemCard from "../catelog/item-card.component.vue"
import Footer from "../footer/footer.component.vue"
import { onMounted, ref } from 'vue';
import getToys from "../../composible/getToys"
import PriceTag from '../btns/price-tag.component.vue';

const isAllToys = ref(true)
const isWoodenToys = ref(false)
const isStuffedAnimals = ref(false)

let allToys = ref([]);
let woodenToys = ref([]);
let stuffedAnimals = ref([]);

const chooseCategory = (category) => {
    category === "all" ? isAllToys.value = true : isAllToys.value = false;
    category === "wooden" ? isWoodenToys.value = true : isWoodenToys.value = false;
    category === "stuffed" ? isStuffedAnimals.value = true : isStuffedAnimals.value = false
    console.log(isAllToys.value)
}

const getImageURL = (type, name) => {

    const newName = name.replace(/ /g, "_");
    return `src/assets/images/${type}/${newName}.png`

}



const route = useRoute()
onMounted(async ()=> {
    let { toys, error } = await getToys();    
    allToys.value = toys.map((toy) => {
        let url = getImageURL(toy.type, toy.name)
        return { ...toy, url }
    })
    woodenToys.value = allToys.value.filter((toy) => toy.type === 'wooden')
    stuffedAnimals.value = allToys.value.filter((toy) => toy.type === "stuffed")
})
</script>