<template>
    <div class="header">
      <div class="header__box">
        <label>type1</label>
        <v-text-field
            placeholder="something..."
            solo
            v-model="type1"
            class="header__field"
            :hide-details="true"
          ></v-text-field>
      </div>
      <div class="header__box">
        <label>type2</label>
        <v-text-field
            placeholder="something..."
            solo
            v-model="type2"
            class="header__field"
            :hide-details="true"
          ></v-text-field>
      </div>
      <v-btn @click="getPrices" class="header__btn">Get Data</v-btn>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default ({
    name: 'Header',
    data: () => ({
        type1: "",
        type2: ""
    }),
    computed: {
        ...mapState({
            prices: (state) => state.prices
        })
    },
    methods: {
        getPrices() {
            this.$store.dispatch('getPrices', [ this.type1, this.type2 ])
        }
    }
})
</script>
