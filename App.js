

import React from 'react'
import MainStack from './src/navigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/store/reducers';
export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
   
  )
}
let store = createStore(reducers);