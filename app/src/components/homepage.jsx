import React from 'react'
import Leftbar from './Left/leftbar'
import Middlebar from './Middle/middlebar.jsx'
import Rightbar from './Right/rightbar.jsx'
import './homepage.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' //routing

const homepage = () => {
const router = createBrowserRouter([
    {
      path: '/',
      element: <><Leftbar/><Middlebar/><Rightbar/></>
    },
    // {
    //   path: '/login',
    //   element: <><Navbar/><Login/></>
    // },
    // {
    //   path: '/about',
    //   element: <><Navbar/><About/></>
    // },
    // {
    //   path: '/user/:username',
    //   element: <><Navbar/><User/></>
    // }
  ])

  return (
    <div>
        <div className='Page'>
      <Leftbar/>
      <Middlebar/>
      <Rightbar/>
      </div>
    </div>
  )
}

export default homepage
