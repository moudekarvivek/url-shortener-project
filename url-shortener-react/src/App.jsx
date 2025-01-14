import './App.css'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import RegisterPage from './components/RegisterPage'

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App