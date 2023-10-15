import React from 'react'

import App from './App.jsx'
import './index.css'
import { Provider } from 'react'
import store from './redux/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
     <App />
     </Provider>
  
  
)
