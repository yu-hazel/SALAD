<template>
  <div>
    <orderHeader />
    <div>

    </div>
    <orderFooter />
  </div>
</template>

<script setup>
import orderHeader from '@/components/OrderHeader.vue';
import orderFooter from '@/components/OrderFooter.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import './style.css';

// Import required modules
import { Pagination } from 'swiper/modules';

// Define Swiper modules
const modules = [Pagination];
</script>

<style scoped></style>