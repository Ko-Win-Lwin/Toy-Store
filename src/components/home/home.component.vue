<template>
    <div class="z-10 home-background grid place-items-center bg-cover relative lg:h-[80vh] h-[62.5vh] bg-no-repeat">
        <div>
            <Welcome-Box/>
        </div>

        <div class="hidden cursor-pointer scroll-circle w-[60px] h-[60px] shadow rounded-full bg-white  absolute top-[96%] left-[50%] lg:grid place-items-center bg-auto">
            <div class="w-[20px] h-[30px] border border-slate-400 rounded-[10px] grid place-items-center relative">                
                <div class="animated-cursor-wheel  text-slate-500 text-3xl absolute top-[-18px]" style="animation-name: bounce">.</div>
            </div>    
        </div>
    </div>
</template>

<script setup>
import WelcomeBox from './welcome-box.component.vue';
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
</style>