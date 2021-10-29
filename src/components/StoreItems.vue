<template>
  <h2>Store</h2>
  <ul>
    <li v-for="item in items" :key="item.name">{{ item.name }} - {{ item.cost }}</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['items'])
  }
}
</script>

<style>

</style>
