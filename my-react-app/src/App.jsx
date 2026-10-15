import React from 'react'
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Navbar from './Component/Navbar'
import Home from "./NavbarComponent/Home"
import Categories from "./NavbarComponent/Categories"
import About from "./NavbarComponent/About"
import Favorites from "./NavbarComponent/Favorites"



function App(){


  return (
    <div>
<Navbar></Navbar>
<div className='pt-20'>
<Routes>

  <Route path='/' element={<Home/>}/>
<Route path='/categories' element={<Categories/>}></Route>
<Route path='/favorites' element={<Favorites/>}/>
<Route path='/about' element={<About/>}></Route>


</Routes>

</div>


    </div>
  )
}

export default App
