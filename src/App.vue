<template>
  <span aria-checked="false"></span>


  <headerComponent />
  <HomePage />
</template>

<script>

import headerComponent from './components/Header/Header.vue'
import HomePage from './components/Home/Home.vue'
export default {
  components: {
    headerComponent,
    HomePage

  }
}
</script>