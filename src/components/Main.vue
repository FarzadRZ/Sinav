<template>
    <div class="main">
        <div class="main__card">
            <v-card v-for="(item, index) in packages" :key="index"  class="main__card-box">
                <h3 class="main__card-title">{{ item.caption }}</h3>
                <span class="main__card-subtitle">
                    <strong>{{ item.price }}</strong>per month
                </span>
                <div class="main__card-result">
                    <h4>Citrus</h4>
                    <div class="main__card-detail">
                        <span v-for="(citrus, i) in item.citrus" :key="i">{{citrus}}</span>
                    </div>
                </div>
                <div class="main__card-result">
                    <h4>Berries</h4>
                    <div class="main__card-detail">
                        <span v-for="(berries, j) in item.berries" :key="j">{{berries}}</span>
                    </div>
                </div>
                <v-btn class="main__card-btn">Choose</v-btn>
            </v-card>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default ({
    name: 'Main',

    computed: {
        ...mapState({
            packages: (state) => state.prices
        })
    }
})
</script>
