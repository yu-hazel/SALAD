<template>
  <div style="padding: 56px 0 0px 0;">
    <orderHeader />
    <div style="display: flex; flex-direction: column; align-items: center;" class="inner">
      <div class="title">
        <h1>샐러드 주문이</h1>
        <h1>완료되었습니다</h1>
      </div>
      <div class="subtitle">
        <h5>회원님의 커스텀 샐러드 배송은</h5>
        <h5>익일 0시부터 오전 7시에 완료됩니다</h5>
      </div>
      <!-- <img src="../assets/person.png" alt="box" class="mainImg"> -->
      <img src="../assets/box02.png" alt="box" class="mainImg">
    </div>
    <orderFooter style="position: absolute; bottom: 0; left: 0;" />
  </div>
</template>

<script setup>
import orderHeader from '@/components/OrderHeader.vue';
import orderFooter from '@/components/OrderFooter.vue';

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
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
}
.subtitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
}

.mainImg {
  /* width: 80%; */
  height: 37%;
  margin-top: 15%;
  object-fit: cover;
  object-position: top;
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
}
@media (max-height: 760px) {
  .mainImg {
    height: 35%;
    bottom: 48%;
  }
}
@media (max-height: 650px) {
  .mainImg {
    height: 30%;
    bottom: 47%;
  }
}
@media (max-height: 620px) {
  .mainImg {
    height: 25%;
    bottom: 47%;
  }
}
@media (max-height: 600px) {
  .mainImg {
    height: 20%;
    bottom: 47%;
    min-height: 150px;
  }
}
</style>