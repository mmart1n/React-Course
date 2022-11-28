import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureProductsStore from "./hooks-store/products-store";
import configureCounterStore from './hooks-store/counter-store';

// const rootReducer = combineReducers({ REDUX
//   shop: productReducer,
// });
// const store = createStore(rootReducer);

/**
 * We don't need to wrap this in a provider coomponent or anything like that.
 *
 * This will make sure that we initialize our store since we import `initStore` from the `store.js` file.
 * `globalState`, `listeners` and `actions` will all be set up and they will be initialized with the values we're passing in our product-store.js file.
 * If we had multiple stores, we would simply call ConfigureStore functions for these different stores.
 */
configureProductsStore();
configureCounterStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render( with Redux
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

// root.render( with ContextAPI
//   <ProductsContextProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ProductsContextProvider>
// );

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
