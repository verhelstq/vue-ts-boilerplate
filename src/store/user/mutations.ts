import { MutationTree } from "vuex";
import { User, UserState } from "./types";


export enum USER_MUTATIONS{
  SET_USER = "SET_USER",
}

export const mutations: MutationTree<UserState> = {
  [USER_MUTATIONS.SET_USER](state, payload: User | null){
    if(payload){
      state.profile = payload;
      state.authenticated = true;
    } else {
      state.authenticated = false;
    }
    state.authenticationLoading = false;
  },
}