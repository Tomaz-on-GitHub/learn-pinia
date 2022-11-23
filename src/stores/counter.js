import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter', 
  state: () => ({
      count : 0
  }), 
  actions: {
    increaseCounter() {
      this.count++
    },
    decreaseCounter() {
      this.count--
    }

  },
  getters: {
    oddOrEven : (state) => {
      if(state.count % 2 === 0) return 'even' 
      return 'odd'
    }
  }

  /*
  const count = ref(10)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
  */
})
