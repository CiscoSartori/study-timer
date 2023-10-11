import { createStore } from 'vuex'

// export default createStore({
//   state () {
//     return {
//       count: 1
//     }
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

export const store = createStore({
  state () {
    return {
      focus: 1,
      short_Brake:6,
      long_Brake:20,
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
  }
})