import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'

import { actions } from '@/store/actions';
import { mutations } from "@/store/mutations"

import { user } from './user'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    navigation: localStorage.getItem('nav') === 'true',
    snackbar: {
      color: 'black',
      text: '',
      trigger: false,
    }
  },
  modules: {
    user
  },
  mutations,
  actions
}

export default new Vuex.Store<RootState>(store);

