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
            class="p-m-2"
          />
        </div>
      </div>
      <div class="p-field">
        <label for="name" class="p-mr-3">Kitten's Name:</label>
        <InputText v-model="kittenName" id="name" type="username" />
      </div>
      <Button label="Submit" class="p-button-outlined" />
    </div>
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
      kittenName: '',
      kittenSrc: '',
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
  },
  methods: {
    selectKitten (kitten) {
      this.kittenSrc = kitten
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

body,
.p-button-label {
  font-family: 'Nunito', sans-serif;
}

h1, h2, h3, h4 {
  font-weight: 700;
}

.welcome-page img {
  width: 250px;
  height: 250px;
}

.welcome-page .p-inputtext {
  border: 1px solid black;
  width: 300px;
}
</style>
