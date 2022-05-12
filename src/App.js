import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SinglePost from './pages/SinglePost'
import Error from './pages/Error'
import Blog from './pages/Blog'
import About from './pages/About'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path='/blog' element={<Blog/>}/>

        <Route path="/blog/:slug" element={<SinglePost/>}/>
          
        <Route path='/about' element={<About/>}/>  

        <Route path='*' element={<Error/>}/>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
