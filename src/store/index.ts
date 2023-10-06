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
      count: 0,
      focus: 10,
      short_Brake:6,
      long_Brake:20
    }
  },
  mutations: {
    change (state:any,change:number) {
      state.count = change
    }
  }
})