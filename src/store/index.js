import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)
export default new Vuex.Store({ modules, getters, mutations, actions })
