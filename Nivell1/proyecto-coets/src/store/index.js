import Vue from 'vue';
import Vuex from 'vuex';
import { Coet } from './../models/coet';
// import { Propulsor } from './../models/propulsor'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        coet1: new Coet("32WESSDS", [10, 30, 80]),
        coet2: new Coet("LDSFJA32", [30, 40, 50, 50, 30, 10]),
        coets: new Map()
    },
    getters: {
        getCoets: function (state) {
            return state.coets;
        }
    },
    mutations: {
        setCoet: function (state, coet) {
            state.coets.set(coet._codi, coet);
        }
    },
    actions: {
        addCoet: function (context, coet) {
            context.commit("setCoet", coet);
        }
    },
    modules: {}
});
//# sourceMappingURL=index.js.map