import { Propulsor } from '@/models/propulsor'
import Vue from 'vue'
import Vuex from 'vuex'
import { Coet } from './../models/coet'
import { RootState } from './../store/types'
// import { Propulsor } from './../models/propulsor'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coet1: new Coet ("32WESSDS", [10, 30, 80]),
    coet2: new Coet ("LDSFJA32", [30, 40, 50, 50, 30, 10]),
    coet: new Coet("", []),
    coets: new Map<string, Coet>()
  },
  getters: {
    getCoets(state) {
      return state.coets;
    }
  },
  mutations: {
    setCoet(state, coet: Coet): void {
      state.coets.set(coet._codi, coet);
    },
    setCoets(state, coet: Coet): void {
      state.coets.set(coet._codi, coet);
    }
  },
  actions: {
    addCoet(context, coet: Coet) {
      context.commit("setCoet", coet);
    },
    putCohets(context, coets: Map<string, Coet>) {
      context.commit("setCoets", coets);
    }
  },
  modules: {
  }
})