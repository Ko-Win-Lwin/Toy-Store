<template>
  <div class="mt-12 py-6 w-[340px] lg:w-[270px] hover:scale-110 rounded-lg shadow-lg duration-500 border">

    <div class="flex flex-col justify-center items-center ">
        <div>
          <slot name="product_image"></slot>
        </div>
      

        <div class="mt-5 flex flex-col justify-center items-center">
            <slot name="product_name"></slot>
            <slot name="price_tag"></slot>
        </div>
    </div>
    
  </div>
</template>

<script setup>

</script>

<style>

</style>