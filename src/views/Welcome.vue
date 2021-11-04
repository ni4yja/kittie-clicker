<template>
  <div class="welcome-page p-grid">
    <div class="p-col-8 p-offset-2">
      <h1 class="p-mt-6">Welcome to Kittie Clicker!!!</h1>
      <div>
        <h2>Choose your kitten</h2>
        <div class="p-mb-4">
          <img
            v-for="(kitten, i) in kittens"
            @click="selectKitten(kitten)"
            :src="kitten.src"
            :key="i"
            class="p-mr-3"
            :class="{ selected: kitten.src === selectedKitten.src}"
          />
        </div>
      </div>
      <div class="p-field">
        <label for="name" class="p-mr-3">Kitten's Name:</label>
        <InputText
          :modelValue="kittenName"
          @input="
            (e) =>
              updateKittenInfo({ field: 'kittenName', value: e.target.value })
          "
          id="name"
          type="username"
        />
      </div>
      <Button @click="goPlay" label="Go Play" class="p-button-outlined" />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Welcome',
  components: {
    Button,
    InputText
  },
  data () {
    return {
      selectedKitten: {}
    }
  },
  computed: {
    ...mapState(['kittenName', 'kittenSrc', 'kittens'])
  },
  methods: {
    ...mapMutations(['updateKittenInfo', 'setSeconds']),
    selectKitten (kittenSrc) {
      this.updateKittenInfo({ field: 'kittenSrc', value: kittenSrc })
      this.selectedKitten = kittenSrc
    },
    goPlay () {
      if (!this.kittenSrc || !this.kittenName) {
        this.$toast.add({ severity: 'error', summary: 'Invalid', detail: 'Select a cat image and name the cat, please', life: 5000, group: 'tr' })
        return
      }
      this.setSeconds(0)
      this.$router.push('/')
    }
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");

body,
.p-button-label {
  font-family: "Nunito", sans-serif;
}

h1,
h2,
h3,
h4 {
  font-weight: 700;
}

.welcome-page img {
  width: 250px;
  height: 250px;
}

.welcome-page img.selected {
  border: 5px solid #008494;
}

.welcome-page .p-inputtext {
  border: 1px solid black;
  width: 300px;
}
</style>
