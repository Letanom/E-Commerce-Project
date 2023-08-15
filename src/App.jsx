import React, { useState } from 'react'
import {
  createBrowserRouter,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
  Routes
} from 'react-router-dom';

//pages
import Home from './pages/Home';
import Phones from './pages/Products';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductDetail from "./pages/detailPage"



const App = () => {


  
  return (
    <>
   
    <Routes>
      {/* <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />} />
      </Route> */}
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Phones/>}/>
      <Route path='/products/:id' element={<ProductDetail/>}/>
      <Route path = '/about' element={<About/>}/>
      <Route path ="/login" element= {<Login/>}/>

      <Route>
      <Route path='*' element={<NotFound/>}/>
      </Route>

    </Routes>
    
 
    </>

  )
}

export default App