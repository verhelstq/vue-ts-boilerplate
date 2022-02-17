export interface User {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  group: string,
}

export interface UserState {
 authenticated: boolean,
 authenticationLoading: boolean,
 profile: User
}