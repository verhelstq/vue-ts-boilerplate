import { GetterTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";

export const getters: GetterTree<UserState , RootState> = {
  getFullName(state): string {
    return `${state.profile.firstname} ${state.profile.lastname}`
  }
}