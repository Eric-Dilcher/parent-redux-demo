import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import './index.css'
import ChildWindowApp from "./childWindow/ChildWindowApp"
import { getParentReduxStore } from "./parentRedux/parentRedux"

const parentStore = getParentReduxStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={parentStore}>
      <ChildWindowApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
