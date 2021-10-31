<template>
  <div class="p-grid">
    <div class="main-page p-col-5 p-offset-1 p-d-flex p-flex-column p-jc-center p-ai-center">
      <h1>{{ kittenName }}</h1>
      <p>Purrs: {{ currentTotal }}</p>
      <p>Level: {{ user.level }}</p>
      <p>Time: {{ seconds }}</p>
      <img :src="kittenSrc.src" alt="player" @click="incrementPurrs" class="cat-circle">
      <Button @click="resetSeconds" label="Reset Timer" class="p-button-outlined p-mt-5" />
      <Button @click="restartGame" label="Restart Game" class="p-button-danger p-button-outlined p-mt-5" />
    </div>
    <Divider layout="vertical"/>
    <div class="p-col-5">
      <StoreItems
        :currentTotal="currentTotal"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import StoreItems from '../components/StoreItems.vue'

export default {
  name: 'Main',
  components: {
    Button,
    Divider,
    StoreItems
  },
  computed: {
    ...mapState(['kittenName', 'kittenSrc', 'timer', 'seconds', 'totalPurrs', 'totalSpent', 'user']),
    ...mapGetters(['currentTotal'])
  },
  methods: {
    ...mapMutations(['setSeconds', 'incrementPurrs']),
    ...mapActions(['createTimer', 'clearTimer']),
    resetSeconds () {
      this.setSeconds(0)
    },
    restartGame () {
      this.$router.push('/welcome')
    }
  },
  mounted () {
    this.createTimer()
  },
  unmounted () {
    this.clearTimer()
  }
}
</script>

<style>
  .cat-circle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: #efe92e;
  }
  .p-divider-solid.p-divider-vertical:before {
    border-left-style: solid !important;
  }
</style>
