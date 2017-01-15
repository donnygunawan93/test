import * as types from '../types'

export const state = {
    count: 0
}

export const mutations = {
    [types.INCREMENT](state) {
        state.count++
    }
}

export const actions = {
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 200)
    }
}
