import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Navigation from '../shop/Navigation/Switch';
import itemsReducer from './store/reducers/itemsReducer';
import cartReducer from './store/reducers/cartReducer';
import wishlistReducer from './store/reducers/WishlistReducer';
import SearchReducer from './store/reducers/SearchReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  search: SearchReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}