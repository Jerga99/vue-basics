
<template>
  <counter-view :counter="counter"></counter-view>
  <counter-controller @on-increment="handleIncrement($event)"></counter-controller>
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
