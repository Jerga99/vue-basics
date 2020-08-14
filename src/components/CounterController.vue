

<template>
  <button @click="increment(1)">Increment</button>
  <button @click="increment(-1)">Decrement</button>
</template>

<script>
  export default {
    methods: {
      increment(inc) {
        this.$emit('onIncrement', inc)
      }
    }
  }
</script>
