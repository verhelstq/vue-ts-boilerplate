import { MutationTree } from "vuex";
import { RootState, Snackbar } from "./types";

export enum ROOT_MUTATIONS{
  TOGGLE_SNACKBAR = "TOGGLE_SNACKBAR",
  SET_NAVIGATION = "SET_NAVIGATION",
}

export const mutations: MutationTree<RootState> = {
  [ROOT_MUTATIONS.TOGGLE_SNACKBAR](state, payload: Snackbar){
      state.snackbar = payload;
  },
  [ROOT_MUTATIONS.SET_NAVIGATION](state, payload){
    if(payload !== undefined){
      state.navigation = payload;
      localStorage.setItem("nav" , String(payload))
    }
  },
}