<template>
  <div class="welcome-page">
    <h1>Welcome to Kittie Clicker!!!</h1>
    <div>
      <h2>Choose your cat</h2>
      <img v-for="(kitten, i) in kittens" :src="kitten.src" :key="i" />
    </div>
    <div class="p-field">
      <label for="name">Cat's Name</label>
      <InputText v-model="catName" id="name" type="username" />
    </div>
    <Button label="Submit" class="p-button-outlined" />
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export default {
  name: 'Welcome',
  components: {
    Button,
    InputText
  },
  data () {
    return {
      catName: '',
      kittens: [
        {
          src: require('../assets/kittie-1.jpg')
        },
        {
          src: require('../assets/kittie-2.jpg')
        },
        {
          src: require('../assets/kittie-3.jpg')
        }
      ]
    }
  }
}
</script>
<style scoped>
  img {
    width: 300px;
    height: 300px;
  }
</style>
