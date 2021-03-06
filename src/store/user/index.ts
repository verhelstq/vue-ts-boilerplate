  
import { Module } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";
import { getters } from '@/store/user/getters'
import { mutations } from "@/store/user/mutations"
import { actions } from "./actions";

const state: UserState = {
  authenticated: false,
  authenticationLoading: false,
  profile : {
    id: "",
    first_name : "",
    last_name: "",
    email: '',
    group: '',
  }
};

export const user: Module<UserState, RootState> = {
  state,
  actions,
  getters,
  mutations
}