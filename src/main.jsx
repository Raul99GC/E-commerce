import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store'
import AppRouter from './AppRouter'
import './index.css'

import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter >
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
