<template>
    <div>
        <p id="info">Rocket {{ coet._codi}} booster max power {{ coet.getMaxPower() }}
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Vuex from 'vuex'
import { Coet } from "../models/coet"

export default Vue.extend({
    props: {
        coet: Coet
    }
})
</script>