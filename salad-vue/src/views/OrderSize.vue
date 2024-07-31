<template>
  <div>
    <orderHeader />
    <div>
      <swiper :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="30" :pagination="{
        clickable: true,
      }" :modules="modules" class="mySwiper">
        <swiper-slide><img src="../assets/saladbowl.png" alt="saladbowl">
          <h2>Lage</h2>
          <h5>600g</h5>
          <h5>7,900원</h5>
        </swiper-slide>
        <swiper-slide><img src="../assets/saladbowl.png" alt="saladbowl">
          <h2>Medium</h2>
          <h5>400g</h5>
          <h5>5,900원</h5>
        </swiper-slide>
        <swiper-slide><img src="../assets/saladbowl.png" alt="saladbowl">
          <h2>Small</h2>
          <h5>300g</h5>
          <h5>4,900원</h5>
        </swiper-slide>
      </swiper>
    </div>
    <orderFooter />
    <RouterLink to="/orderSelect">
      다음으로
    </RouterLink>
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

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.swiper-slide {
  width: 250px;
  height: 350px;
}

.swiper-slide:nth-child(2n) {
  width: 220px;
  height: 350px;
}

.swiper-slide:nth-child(3n) {
  width: 190px;
  height: 350px;
}

:deep(.swiper-wrapper) {
  align-items: center;
}
</style>