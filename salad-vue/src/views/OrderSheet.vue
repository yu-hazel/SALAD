<template>
  <div style="padding-bottom: 110px; display: flex; flex-direction: column; gap: 24px;">

    <orderHeader />
    <div>
      <h5 style="padding-left: 8px; margin-bottom: 12px;">배송정보</h5>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; gap: 8px;">
          <div class="inputBox" style="flex: 1 1 0;">
            <h5>박선정</h5>
          </div>
          <div class="inputBox" style="flex: 2 1 0;">
            <h5>010-1234-5678</h5>
          </div>
        </div>
        <div class=" inputBox" style="height: 78px;">
          <h5>충북 청주시 상당구 125번길 355-0 66아파트 101동 309호 [12345]</h5>
        </div>
        <div class="inputBox">
          <h5>배송메모를 입력하세요</h5>
        </div>
      </div>
    </div>
    <div>
      <h5 style="padding-left: 8px; margin-bottom: 12px;">주문상품</h5>
      <div class="inputBox">
        <h5>커스텀 외 1종</h5>
      </div>
    </div>
    <div>
      <h5 style="padding-left: 8px; margin-bottom: 12px;">할인방법</h5>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div class="inputBox">
          <h5>쿠폰사용</h5>
          <h5>사용가능 쿠폰이 없습니다</h5>
        </div>
        <div class="inputBox">
          <h5>포인트사용</h5>
          <h5>잔여 P : 0 P</h5>
        </div>
      </div>
    </div>
    <div>
      <h5 style="padding-left: 8px; margin-bottom: 28px;">결제방법</h5>
      <swiper :slidesPerView="'1.5'" :centeredSlides="true" :spaceBetween="12" :modules="modules" class="mySwiper">
        <swiper-slide>
          <div class="card">
            <h3>신용카드</h3>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <h3>계좌이체</h3>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <h3>네이버페이</h3>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <h3>카카오페이</h3>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <!-- <h5 style="padding-left: 8px; margin-bottom: 8px;">결제금액</h5> -->
      <div class="inputBox">
        <h5>총 결제금액</h5>
      </div>
    </div>
    <orderFooter style="position: fixed; bottom: 0; left: 0;" />
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div style="display: flex; gap: 6px;">
        <v-icon class="agreeBtn">mdi-check</v-icon>
        <h5>(필수) 주문내용 확인 및 결제 동의</h5>
      </div>
      <div style="display: flex; gap: 6px;">
        <v-icon class="agreeBtn">mdi-check</v-icon>
        <h5>(필수) 개인정보 제3자 정보 제공 동의</h5>
      </div>
      <div style="display: flex; gap: 6px;">
        <v-icon class="agreeBtn">mdi-check</v-icon>
        <h5>(필수) 서비스 이용약관 동의</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import orderHeader from '@/components/OrderHeader.vue';
import orderFooter from '@/components/OrderFooter.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

// Expose the modules to the Swiper component
const modules = [Pagination];
</script>

<style scoped>
.inputBox {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #F6F6F6;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  padding: 0 20px;
}
.card {
  height: 130px;
  background-color: #52CA19;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.swiper-slide-prev .card, .swiper-slide-next .card {
  background-color: #F6F6F6;
}

.agreeBtn {
  background-color: #f6f6f6;
  padding: 10px;
  border-radius: 6px;
  font-size: 18px;
}
.agreeBtn:focus {
  background-color: #333;
  color: #eee;
}
</style>