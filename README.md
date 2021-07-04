
# vue-ts-boilerplate

## Features

 - Built with Vue 2 + TypeScript
 - Vuetify as component framework ( MD )
 - Firebase added
 - Using vue-class-component syntax ([link](https://class-component.vuejs.org/)) and vue-property-decorator ([link](https://github.com/kaorun343/vue-property-decorator))
 - Built in axios for http requests. ( use this.$http in vue  components )
 - Routing with navigation guard based on auth
 - Basic vuex store using a modern TS approach.
 - PWA support

## Project setup
```
npm install
```
### Add your firebase config to src/firebase.ts
You can obtain these credentials in the [firebase console](https://console.firebase.google.com) 
```
const config = {
	// firebase config goes here
};
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
