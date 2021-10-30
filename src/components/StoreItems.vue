<template>
  <h2>Store</h2>
  <ul>
    <li
      v-for="item in items"
      :key="item.name"
      @click="() => checkPurchase(item)"
      :class="{ disabled: currentTotal < item.cost }"
    >
      {{ item.name }} - {{ item.cost }} ({{ purchasedItemCount(item) }})
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  props: {
    currentTotal: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(['items']),
    ...mapGetters(['purchasedItemCount'])
  },
  methods: {
    ...mapMutations(['purchaseItem']),
    checkPurchase (item) {
      if (this.currentTotal >= item.cost) {
        this.purchaseItem(item)
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

ul li {
  border: 1px solid;
  padding: 5px 10px;
  margin-bottom: 5px;
}
ul li.disabled {
  background: gainsboro;
}
</style>
