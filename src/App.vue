



<template>
  <div class="my-app">
    <counter-view :counter="counter"></counter-view>
    <counter-controller @onIncrement="handleIncrement($event)"></counter-controller>
  </div>
</template>

<script>
  import CounterView from './components/CounterView';
  import CounterController from './components/CounterController';
  export default {
    components: {
      CounterView, CounterController
    },
    data() {
      return {
        counter: 1000
      }
    },
    methods: {
      handleIncrement(inc) {
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

