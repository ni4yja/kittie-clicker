<template>
  <div class="main-page p-d-flex p-flex-column p-jc-center p-ai-center">
    <h1>{{ kittenName }}</h1>
    <p>Purrs: {{ purrs }}</p>
    <img :src="kittenSrc.src" alt="player" @click="incrementPurrs" class="cat-circle">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Main',
  data () {
    return {
      purrs: 0
    }
  },
  computed: {
    ...mapState(['kittenName', 'kittenSrc'])
  },
  methods: {
    incrementPurrs () {
      this.purrs += 1
    }
  }
}
</script>

<style scoped>
  .cat-circle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: #efe92e;
  }
</style>
