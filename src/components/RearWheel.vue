<script setup>
  import Tire from './Tire.vue'
  import { useCounterStore } from '@/stores/counter'; 
  const page = 'history';

  //counterStore에는 {count, doubleCount, increment} 객체 주소값이 넘어온다.
  const counterStore = useCounterStore();
</script>

<template>
  <div class="rear-wheel">
    <span>REAR WHEEL</span>
    <tire color = "YELLOW"/>
    <div>TIMES: {{ counterStore.count }}</div>
    <button @click="counterStore.increment">회전</button>
    <button @click="counterStore.descrement">역회전</button>
  </div>
</template>

<style scoped>
.rear-wheel {
  border: 1px solid black;
  border-radius : 50%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width:150px;
  height:150px;
}
</style>

