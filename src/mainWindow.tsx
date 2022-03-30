import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { store } from "./reduxCode/store"
import './index.css'
import MainWindowApp from './mainWindow/MainWindowApp'
import { exposeReduxStore } from "./parentRedux/parentRedux"

exposeReduxStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainWindowApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
