import React from 'react';
// import {  Provider } from 'react-redux';
// import {createStore, combineReducers} from 'react';

import Navigation from '../shop/Navigation/Drawer';
import itemsReducer from './store/reducers/itemsReducer';

// const rootReducer = combineReducers({
//   items: itemsReducer
// })

// const store = createStore(rootReducer)

export default function App() {
  return (
    // <Provider store={store}>
    <Navigation />
    // </Provider>
  )
}