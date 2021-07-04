import { ActionTree } from "vuex";
import { RootState } from "../types";
//import { USER_MUTATIONS } from "./mutations";
//import API from '@/plugins/axios';
import { UserState } from "./types";

export enum USER_ACTIONS {
  AUTHENTICATE_USER = "AUTHENTICATE_USER",
  SIGNOUT = "SIGNOUT"
}

export const actions: ActionTree<UserState, RootState> = {
  [USER_ACTIONS.AUTHENTICATE_USER]({commit}){
    commit
    throw new Error();
  },
  [USER_ACTIONS.SIGNOUT]({commit}){
    commit
    throw new Error();
  }
}