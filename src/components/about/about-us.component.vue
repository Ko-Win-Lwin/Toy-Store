<template>
    <Breadcrumb :route="route"/>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Breadcrumb from '../navigation/breadcrumb.component.vue';

const route = useRoute()
</script>