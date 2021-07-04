export interface RootState {
  navigation: boolean;
  snackbar: Snackbar
}

export interface Snackbar {
  color: string; 
  text: string;
  trigger?: boolean;
}
