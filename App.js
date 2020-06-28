import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Navigation from '../shop/Navigation/Drawer';
import itemsReducer from './store/reducers/itemsReducer';
import cartReducer from './store/reducers/cartReducer';
import wishlistReducer from './store/reducers/WishlistReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}