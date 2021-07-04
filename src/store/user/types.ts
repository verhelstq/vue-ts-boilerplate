export interface User {
  id: string,
  firstname: string,
  lastname: string,
  email: string,
}

export interface UserState {
 authenticated: boolean,
 authenticationLoading: boolean,
 profile: User
}