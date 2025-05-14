import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import CallRoom from './pages/callroom'

function App() {

  const route=createBrowserRouter([
    {
      path:"/",
      index:'true',
      element: <Home/>
    },{
      path:'/call-room/:RoomCode',
      element:<CallRoom/>

    }
  ])
 
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
