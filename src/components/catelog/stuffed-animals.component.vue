<template>
  <div>
    <div class="flex justify-between items-center">
        <h1 class="text-2xl lg:text-3xl">Stuffed Animals</h1>
        <div class="group cursor-pointer" @click="gotoCatelogPage">
            <span class="text-sm">See All Toys 	&rarr;</span>
            <div class="w-full bg-gray-200 rounded-full h-[2px] group-hover:bg-lime-500" />
        </div>
    </div>
    
    <div class="w-full mt-8 bg-gray-200 rounded-full h-[2px] lg:h-[1.5px]">
        <div class="bg-lime-500 h-[2px] lg:h-[1.5px] rounded" style="width: 15%" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
        <ItemCard>
            <template #product_image>
                <img src="../../assets/images/stuffed_animals/stuffed_bear.png" alt="" class="w-[200px]">
            </template>
            
            <template #product_name>
                <span>Teddy Bear</span>
            </template>

            <template #price_tag>
                <PriceTag>
                    <template #price_tag>$ 30.00 USD</template>
                </PriceTag>
            </template>
        </ItemCard> 

        <ItemCard>
            <template #product_image>
                <img src="../../assets/images/stuffed_animals/stuffed_bear.png" alt="" class="w-[200px]">
            </template>
            
            <template #product_name>
                <span>Teddy Bear</span>
            </template>
            
            <template #price_tag>
                <PriceTag>
                    <template #price_tag>$ 30.00 USD</template>
                </PriceTag>
            </template>
        </ItemCard>  

        <ItemCard>
            <template #product_image>
                <img src="../../assets/images/stuffed_animals/stuffed_bear.png" alt="" class="w-[200px]">
            </template>
            
            <template #product_name>
                <span>Teddy Bear</span>
            </template>
            
            <template #price_tag>
                <PriceTag>
                    <template #price_tag>$ 30.00 USD</template>
                </PriceTag>
            </template>
        </ItemCard> 

        <ItemCard>
            <template #product_image>
                <img src="../../assets/images/stuffed_animals/stuffed_bear.png" alt="" class="w-[200px]">
            </template>
            
            <template #product_name>
                <span>Teddy Bear</span>
            </template>
            
            <template #price_tag>
                <PriceTag>
                    <template #price_tag>$ 30.00 USD</template>
                </PriceTag>
            </template>
        </ItemCard> 
    </div>

  </div>
</template>

<script setup>
import ItemCard from "./item-card.component.vue"
import PriceTag from "../btns/price-tag.component.vue"
import router from "@/router";

const gotoCatelogPage = () => {
    router.push({"name": "catelog"});
}
</script>

<style>

</style>