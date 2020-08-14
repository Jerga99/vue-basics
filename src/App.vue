



<template>
  <div class="my-app">
    <counter-view :counter="counter"></counter-view>
    <button @click="increment(1)">Increment</button>
    <button @click="increment(-1)">Decrement</button>
  </div>
</template>

<script>
  import CounterView from './components/CounterView';
  export default {
    components: {
      CounterView
    },
    data() {
      return {
        counter: 1000
      }
    },
    methods: {
      increment(inc) {
        this.counter += inc
      }
    }
  }
</script>

<style>
  .my-app {
    color: blue;
    padding: 200px;
  }

  h1 {
    font-size: 70px;
  }

</style>

