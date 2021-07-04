import { ActionTree } from "vuex";
import { ROOT_MUTATIONS } from "./mutations";
import { RootState, Snackbar } from "./types";

export enum ROOT_ACTIONS {
  TOGGLE_NOTIFICATION = "TOGGLE_NOTIFICATION",
  TOGGLE_NAVIGATION = "TOGGLE_NAVIGATION",
}

export const actions: ActionTree<RootState, RootState> = {
  [ROOT_ACTIONS.TOGGLE_NOTIFICATION]({commit}, payload: Snackbar){
   commit(ROOT_MUTATIONS.TOGGLE_SNACKBAR, {
     ...payload,
     trigger: true,
   })
  },
  [ROOT_ACTIONS.TOGGLE_NAVIGATION]({commit}, payload){
    commit(ROOT_MUTATIONS.SET_NAVIGATION, payload)
  }
}