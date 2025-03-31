import { useEffect, useState } from 'react'
import "aos/dist/aos.css"
import './App.css'
import AllRoutes from './RoutesFiles/AllRoutes/AllRoutes'
import Aos from 'aos'

function App() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <AllRoutes />
    </>
  )
}

export default App
