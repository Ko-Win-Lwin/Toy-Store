<template>
    <div class="z-10 bg-white pb-32">
      <div class="home-background grid place-items-center bg-cover relative lg:h-[80vh] h-[62.5vh] bg-no-repeat">
          <div>
              <Welcome-Box/>
          </div>
          <div class="hidden cursor-pointer scroll-circle w-[60px] h-[60px] shadow rounded-full bg-white  absolute top-[96%] left-[50%] lg:grid place-items-center bg-auto">
              <div class="w-[20px] h-[30px] border border-slate-400 rounded-[10px] grid place-items-center relative">
                  <div class="animated-cursor-wheel  text-slate-500 text-3xl absolute top-[-18px]" style="animation-name: bounce">.</div>
              </div>
          </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-20  md:gap-16 justify-between items-center mt-32  px-5 lg:px-14 md:px-32 lg:gap-8">
        <div class="flex flex-col md:flex-row justify-between items-center rounded-[20px] bg-yellow-500 w-full h-[300px] lg:h-[200px] md:h-[170px] relative py-8 md:py-0">
          <div class="absolute top-[-65px] lg:top-[-65px] md:top-[-40px] md:left-0">
            <img src="../../assets/images/stuffed/Teddy_Bear.png" alt="" class="lg:w-[230px] w-[200px]">
          </div>
          <div class="w-full mt-auto md:mt-0 flex flex-col justify-center items-center md:justify-start md:items-start md:block md:ml-[50%]">
            <h2 class="text-white text-xl md:text-3xl">Stuffed Animals</h2>
            <ShopNowBtn @click="gotoCatelogPage" />
          </div>
        </div>
        <div class="flex flex-col-reverse md:flex-row justify-between items-center rounded-[20px] bg-pink-700 w-full h-[300px] lg:h-[200px] md:h-[170px] relative py-8 md:py-0">
          <div class="w-full mt-auto md:mt-0 flex flex-col justify-center md:justify-start md:items-start items-center md:ml-[15%]">
            <h2 class="text-white text-xl md:text-3xl">Wooden Toys</h2>
            <ShopNowBtn @click="gotoCatelogPage"/>
          </div>
          <div class="absolute top-[-65px] lg:top-[-65px] md:top-[-40px] md:right-5">
            <img src="../../assets/images/wooden/Happy_Flower.png" alt="" class="w-[200px] lg:w-[230px]">
          </div>
        </div>
      </div>
    </div>


    <div class="my-20 p-5 lg:px-14">
          <div class="stuffed_animals">
            <StuffedAnimals/>
            
            <div class="stuffed">
                <div class="grid md:gap-x-16 lg:gap-x-8 grid-col-1 lg:grid-cols-4 md:grid-cols-2">
                    <div v-for="toy in stuffedAnimals.slice(0,4)" :key="toy" class="grid place-items-center">
                      <ItemCard>
                        <template #product_image>
                            <img  :src='toy.url' alt="" class="w-[200px] h-[220px]">
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

          <div class="wooden_toys mt-16">
            <WoodenToys/>
            <div class="wooden">
                <div class="grid md:gap-x-16 lg:gap-x-8 grid-col-1 lg:grid-cols-4 md:grid-cols-2">
                    <div v-for="toy in woodenToys.slice(0,4)" :key="toy" class="">
                      <ItemCard>
                        <template #product_image>
                            <img  :src='toy.url' alt="" class="w-[200px] h-[220px]">
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
      </div>

    <div class="deer-image">
        <About/>
    </div>

    <div>
      <Footer/>
    </div>
  </template>

<script setup>
import WelcomeBox from './welcome-box.component.vue';
import ShopNowBtn from "../btns/shop-now-btn.component.vue"
import ItemCard from "../catelog/item-card.component.vue"
import About from '../about/about.component.vue';
import Footer from "../footer/footer.component.vue"
import WoodenToys from "../catelog/wooden-toys.component.vue"
import StuffedAnimals from "../catelog/stuffed-animals.component.vue"
import PriceTag from "../btns/price-tag.component.vue"

import router from '@/router';
import { onMounted, ref } from 'vue';
import getToys from '@/composible/getToys';

const gotoCatelogPage = () => {
  router.push({"name": "catelog"});
}

const allToys = ref([])
const woodenToys = ref([])
const stuffedAnimals = ref([])

const getImageURL = (type, name) => {

const newName = name.replace(/ /g, "_");
  return `src/assets/images/${type}/${newName}.png`
}

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

<style>
.home-background {
    background-image: url(../../assets/images/home-background.jpg);
    background-position: 50% 94%;
}



@keyframes bounce {
  0% {
    transform: translateY(0px);
  }

  10% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}

.animated-cursor-wheel {
  animation: bounce 2s infinite; /* 1s duration, infinite loop */
}

.deer-image {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../../assets/images/sticky-background.jpg");
  background-position: 0px 0px, 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment:  fixed;
}
</style>