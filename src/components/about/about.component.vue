<template>
    <div class="flex flex-col justify-center items-center gap-5 text-white py-16  lg:py-32 lg:px-48 text-center">
        <p class="text-sm">About the shop</p>
        <h2 class="text-4xl px-16 md:px-0">Watch Our Story</h2>
        <p class="px-8 md:px-16 md:text-sm lg:px-0">There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</p>

        <div class="group hover:scale-110 duration-100" @click="toggleModal">
            <div class="w-[75px] h-[75px] rounded-full bg-lime-500 grid place-items-center">
                <i class="fa-solid fa-play text-2xl"></i>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <div v-if="isVideoOpen" class="video-modal">
            <div class="absolute top-10 right-10 cursor-pointer" @click="toggleModal">
                <i class="fa-solid fa-xmark text-white text-3xl"></i>
            </div>
            
            <iframe width="600" height="400" src="https://www.youtube.com/embed/nhBVL41-_Cw?si=KA1IH7TUY02xg0cz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        </div>
    </Teleport>
</template>

<script setup>
import { onMounted, ref } from "vue"

const isVideoOpen = ref(false)

const toggleModal = () => {
    isVideoOpen.value = !isVideoOpen.value
    const body = document.querySelector("body");
    if (isVideoOpen.value) {
        body.style.overflowY = "hidden"
    } else {
        body.style.overflowY = "visible"
    }
}

onMounted( ()=> {

})
</script>


<style>
.video-modal {
    display: grid;
    place-items: center;
    position: fixed;
    background: linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.9));
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
}
</style>