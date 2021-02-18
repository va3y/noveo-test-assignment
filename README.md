# Vue.js Dogs

A dog views, based on the [Dog CEO API](https://dog.ceo/dog-api/). Made with Vue 3 Composition API and SCSS.

The app primarily uses Vuex to fetch and store dogs from the API. It uses 2 main arrays: 
  
1. `renderedArray` that stores dogs that are currently displayed.
2. `favoritesArray` that stores favorite dogs and saves them to the HTML5 LocalStorage. Dog URL is used as a unique id. 

The dog cards are stored as a dog object. Right now it is fairy simple: 

```
dogObject: {
  url: String,
  isFavorite: Boolean
}
```

The list of breeds is also fetched dynamically to make the app more maintainable.

Deployed on Netlify [here](https://brave-booth-d3e36c.netlify.app/).


## Commands
```
Setup: 
npm install

Dev server: 
npm run serve

Compile for production: 
npm run build

Run unit tests: 
npm run test:unit

Run e2e tests: 
npm run test:e2e
```