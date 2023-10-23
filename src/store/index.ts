import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      focus: 1,
      short_Brake:6,
      long_Brake:20,
      total:0,
      state:1,
    }
  },
  mutations: {
    setFocus (state:any,change:number) {
      state.focus = change
    },
    setShort_Brake (state:any,change:number) {
      state.short_Brake = change
    },
    setLong_Brake (state:any,change:number) {
      state.long_Brake = change
    },
    setTotal(state:any,change:number) {
      state.total = change
    },
    setState(state:any,change:number) {
      state.state = change
    },
  }
})