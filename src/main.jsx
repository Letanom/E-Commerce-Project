import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import "./styles/index.css"
import './assets/css/bootstrap.css'
import  store  from './redux/store'
import { Provider } from 'react-redux'




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <RootLayout>

    <App  />
    </RootLayout>
   
    </BrowserRouter>
    
    
  </Provider>
)
