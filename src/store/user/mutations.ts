import { MutationTree } from "vuex";
import { User, UserState } from "./types";


export enum USER_MUTATIONS{
  SET_USER = "SET_USER",
  SET_PROFILE = "SET_PROFILE",
}

export const mutations: MutationTree<UserState> = {
  [USER_MUTATIONS.SET_USER](state, payload: User){
    state.profile = payload;
    state.authenticated = payload.id.length !== 0;
    state.authenticationLoading = false;
  },
  [USER_MUTATIONS.SET_PROFILE](state, payload: User){
    state.profile = payload
  }
}