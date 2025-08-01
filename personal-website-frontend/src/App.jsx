import './App.css'
import {BrowserRouter, Routes, Route, useParams, Navigate} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home'
import SoftwareEngineer from './components/Pages/SoftwareEngineer'
import Musician from './components/Pages/Musician'
import Educator from './components/Pages/Educator'
import Administrator from './components/Pages/Administrator'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/softwareengineer" element={<SoftwareEngineer />}/>
      <Route path="/musician" element={<Musician />}/>
      <Route path="/educator" element={<Educator />}/>
      <Route path="/administrator" element={<Administrator />}/>
    </Routes>
      
    </>
  )
}

export default App
