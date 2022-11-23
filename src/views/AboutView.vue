<template>
  <div class="about">
    <h1>About</h1>
    <div class="division"></div>

    <button
    @click="storeCounter.increaseCounter"
    > 
    {{storeCounter.count}}
    </button>
  </div>
</template>



<script setup>
import {useCounterStore} from'@/stores/counter'

const storeCounter = useCounterStore()

</script>


<style scoped>
button {
  font-size: 60px;
  margin-top: 20px;

}
</style>