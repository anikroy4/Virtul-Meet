import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'

function App() {

  const route=createBrowserRouter([
    {
      path:"/",
      index:'true',
      element: <Home/>
    },{
      path:'/call-room',
      
    }
  ])
 
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
