<template>
  <div>
    <orderHeader />
    <div>
      <swiper :slides-per-view="'auto'" :centered-slides="true" :space-between="30" :pagination="{ clickable: true }"
        :modules="modules" class="mySwiper" @slideChange="onSlideChange">
        <swiper-slide>
          <img src="../assets/saladbowl.png" alt="saladbowl" />
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <h3>라지 사이즈 (600g)</h3>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <h5>기본재료 8가지</h5>
                <h5>드레싱 2가지</h5>
              </div>
            </div>
            <h4>7,900원</h4>
          </div>

        </swiper-slide>
        <swiper-slide>
          <img src="../assets/saladbowl.png" alt="saladbowl" />
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <h3>클래식 사이즈 (600g)</h3>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <h5>기본재료 6가지</h5>
                <h5>드레싱 1가지</h5>
              </div>
            </div>
            <h4>6,900원</h4>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/saladbowl.png" alt="saladbowl" />
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <h3>미니 사이즈 (600g)</h3>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <h5>기본재료 4가지</h5>
                <h5>드레싱 1가지</h5>
              </div>
            </div>
            <h4>5,900원</h4>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <orderFooter :onNext="saveSizeAndNext" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSizeStore } from '@/stores/sizeStore';
import orderHeader from '@/components/OrderHeader.vue';
import orderFooter from '@/components/OrderFooter.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
const modules = [Pagination];
const sizeStore = useSizeStore();
const currentSlide = ref(sizeStore.selectedSize);
const onSlideChange = (swiper) => {
  const slides = ['Large', 'Medium', 'Small'];
  currentSlide.value = slides[swiper.activeIndex];
  sizeStore.setSize(currentSlide.value);
};
const saveSizeAndNext = () => {
  sizeStore.setSize(currentSlide.value);
  navigationStore.goToNextPage();
};
onMounted(() => {
  sizeStore.loadSizeFromLocalStorage();
});
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
  gap: 24px;
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
.bowl {
  padding: 10px;
  border-radius: 500px;
}
.active {
  background-color: #52CA19;
}
</style>