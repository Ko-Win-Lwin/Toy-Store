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
            <img src="../../assets/images/stuffed_animals/stuffed_bear.png" alt="" class="lg:w-[230px] w-[200px]">
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
            <img src="../../assets/images/wooden_toys/wooden_spinner.png" alt="" class="w-[200px] lg:w-[230px]">
          </div>
        </div>
      </div>
      <div class="stuffed_animals mt-20 px-5 lg:px-14">
        <StuffedAnimals />
        <WoodenToys />
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
import StuffedAnimals from '../catelog/stuffed-animals.component.vue';
import WoodenToys from '../catelog/wooden-toys.component.vue';
import About from '../about/about.component.vue';
import Footer from "../footer/footer.component.vue"

import router from '@/router';

const gotoCatelogPage = () => {
  router.push({"name": "catelog"});
}
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