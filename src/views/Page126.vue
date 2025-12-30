<script setup>
import {onMounted, reactive} from 'vue' // {}가 있다면 함수, 변수, 상수
import axios from 'axios' // {} 없다면 객체 주소값 리턴
import { mapState } from 'pinia'

const state = reactive({
  imgList:[]
})
onMounted(() => {
  console.log('onMounted');
  axios.get('https://picsum.photos/v2/list')
      .then( res => {state.imgList=res.data
        console.log(res.data)
          });
        })
</script>

<template>
<h3>page126.vue</h3>
<!-- state.imgList에 있는 자료로 img를 화면에 뿌려주세요
  src로 쓸 데이터는 각 객체의 download_url 속성에 있습니다. -->
  <div>
    <img v-for="item in state.imgList" :src="item.download_url">
    </div>
</template>

<style scoped>

</style>