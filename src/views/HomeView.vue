

<template>
  <div class="home">
    <!--<h1>Home</h1>  -->
    <p>This is a normal Vue counter</p>
    <div class="count">
      
      {{ count2 }}
    </div>

    <div class="buttons">
      <button @click="decreaseCount">-</button> 
      <button @click="increaseCount">+</button>
    </div>
    <hr>
    <div>
      This counter is: {{oddOrEven}}
    </div>

    <div class="division"></div>
   
    
    <p>This is a Pinia counter</p>
    <div class="count">
      
      {{ storeCounter.count }}
    </div>


    <div class="buttons">
      <button @click="storeCounter.decreaseCounter">-</button> 
      <button @click="storeCounter.increaseCounter">+</button>
    </div>
    <hr>
    <div>
      This counter is: {{storeCounter.oddOrEven}}
    </div>

    <div class="division"></div>
    <div>
      <h3>Edit Counter</h3>
      <input 
      v-model="storeCounter.count"
      type="number">
    </div>
  </div>  
</template>

<script setup>
import {ref, computed} from 'vue'
import {useCounterStore} from'@/stores/counter'

const storeCounter = useCounterStore()

const count2 = ref(0);
const increaseCount = () => {
  //console.log('increase Count');
  count2.value++;
}
const decreaseCount = () => {
  //console.log('increase Count');
  count2.value--;
}
const oddOrEven = computed(()=> {
  if(count2.value % 2 === 0) return 'even'
  return 'odd'
});

</script>


<style scoped>
.count {
  font-size: 60px;
  margin: 10px;
}
.buttons button {
  font-size: 40px;
  margin: 0 20px 10px 10px;
  width: 80px;
}
.division {
  width: 100px;
  height: 50px;
}
</style>>