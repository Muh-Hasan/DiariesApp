import React from 'react';
import './App.css'
// components
import Diary from './components/Diary/diary'
import Displaydiary from './components/Diary/diplayDiary'
// redux
import { Provider } from 'react-redux'
import {store} from './store/index'

function App() {
  return (
    <Provider store={store}>
    <div>
      <Diary />
      <Displaydiary />
    </div>
    </Provider>
  );
}

export default App;
