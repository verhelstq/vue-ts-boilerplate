import supabase from "@/supabase";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { USER_MUTATIONS } from "./mutations";
//import API from '@/plugins/axios';
import { UserState } from "./types";

export enum USER_ACTIONS {
  AUTHENTICATE_USER = "AUTHENTICATE_USER",
  SIGNOUT = "SIGNOUT"
}

export const actions: ActionTree<UserState, RootState> = {
  async [USER_ACTIONS.AUTHENTICATE_USER]({commit}){
    if(supabase.auth.session()){
      const { data, error } = await supabase.from('Profiles').select().eq('id', supabase.auth.session()?.user?.id);
      commit(USER_MUTATIONS.SET_USER, error ? null : data![0]) 
    } else {
      commit(USER_MUTATIONS.SET_USER, null)
    }
    
  },
  async [USER_ACTIONS.SIGNOUT]({commit}){
    await supabase.auth.signOut();
    commit(USER_MUTATIONS.SET_USER, null);
  }
}