import ShortenUrlPage from "./components/ShortenUrlPage";
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import RegisterPage from './components/RegisterPage'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import LoginPage from './components/LoginPage'

const AppRouter = () => {
    return(
        <>
            <Navbar />
            <Toaster position='bottom-center'/>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardLayout />} />
            </Routes>
            <Footer />
        </>
    );
}

export default AppRouter;

export const SubDomainRouter = () => {
    return(
        <Routes>
            <Route path="/:url" element={<ShortenUrlPage />} />
        </Routes>
    )
}