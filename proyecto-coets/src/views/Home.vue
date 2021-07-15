<template>
  <div class="home">
    <HelloWorld :msg="'Rockets'"/>
    <button class="btn btn-primary m-2" @click="click(coet1)">Create Rocket 1</button>

    <button class="btn btn-primary m-2" @click="click(coet2)">Create Rocket 2</button>

    <button class="btn btn-primary m-2" @click="currentPower = coet.accelerar()">Acelerar</button>

    <button class="btn btn-primary m-2" @click="currentPower = coet.frenar()">Frenar</button>

    <button class="btn btn-primary m-2" @click="veureInfoCoet(coet)">Veure</button>

    <button class="btn btn-primary m-2" @click="veureTotsCoets(coet)">Veure Tot</button>

    <div v-if="infoCoet" id="infoRocket" >
      <Rocket :coet="coet"/>
    </div>

    <div v-if="currentPower != 0" id="infoCursa">
      El coet {{ coet._codi }} va una velocitat de {{ currentPower }}
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './../components/HelloWorld.vue'
import Rocket from './../components/Rocket.vue'
import { Coet } from './../models/coet'

@Component({
  components: {
    HelloWorld,
    Rocket,
  },
})
export default class Home extends Vue {
  coets = new Array<Coet>()
  infoCoet = false;
  infoPower = false;
  coet= new Coet("", []);
  currentPower = 0;
  coet1 = this.$store.state.coet1;
  coet2 = this.$store.state.coet2;

  created(): void {

    this.$store.dispatch("putCohets", this.$store.state.coets);
    // if (cohets.size === 0) {
    //   this.btCursaDisabled = true;
    // } else {
    //   this.btCursaDisabled = false;
    // }
  }


  click (coet: Coet) {
    this.infoCoet = false;
    this.coet = coet;
    this.$store.dispatch("addCoet", this.coet);
    this.coets.push(this.coet)
    console.log(this.coets);
    this.infoCoet = true;
  }

   // Assigna tot l'array de cohets al store
  putCoets(coets: Map<string, Coet>): void {
    this.$store.dispatch("addCoet", coets);
  }

  veureInfoCoet(coet: Coet) {
    let text = coet.veure();
    alert(text);
  }

  veureTotsCoets() {
    let text = "";
    for (let i = 0; i < this.coets.length; i++) {
      text = text + this.coets[i].veure(); 
    }
    alert(text)
  }
}
</script>
