import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      focus: '1',
      short_Brake:'6',
      long_Brake:'20',
      total:'0',
      today:0,
      state:'1',

      /////////////

      data:"1"
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
    setToday(state:any,change:number) {
      state.today = change
    },

    setState(state:any,change:number) {
      state.state = change
    },
//////////////////////////////////////////

    updateData(state:any, data:number) {
      state.data = data;
    },
  },
  actions: {
    loadAllData({ commit }) {
      const focus = JSON.parse(localStorage.getItem('myFocus') || '{}');
      if (focus) {
        commit('setFocus', focus);
      }
      const short_Brake = JSON.parse(localStorage.getItem('myShort_Brake') || '{}');
      if (short_Brake) {
        commit('setShort_Brake', short_Brake);
      }
      const long_Brake = JSON.parse(localStorage.getItem('myLong_Brake') || '{}');
      if (long_Brake) {
        commit('setLong_Brake', long_Brake);
      }
      const total = JSON.parse(localStorage.getItem('myTotal') || '{}');
      if (total) {
        commit('setTotal', total);
      }
    },

    saveFocus({ commit }, data) {
      localStorage.setItem('myFocus', JSON.stringify(data));
      commit('setFocus', data);
    },
    saveShort_Brake({ commit }, data) {
      localStorage.setItem('myShort_Brake', JSON.stringify(data));
      commit('setShort_Brake', data);
    },
    saveLong_Brake({ commit }, data) {
      localStorage.setItem('myLong_Brake', JSON.stringify(data));
      commit('setLong_Brake', data);
    },

    saveTotal({ commit }, data) {
      localStorage.setItem('myTotal', JSON.stringify(data));
      commit('setTotal', data);
    },
  },


})