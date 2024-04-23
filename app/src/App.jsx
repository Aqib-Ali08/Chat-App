import { useState } from 'react'
import './App.css'
import io from 'socket.io-client';
import Homepage from '../src/components/homepage'

function App() {
  // const socket = io();

  return (
    <>
    <Homepage/>
    </>
    )
}

export default App
