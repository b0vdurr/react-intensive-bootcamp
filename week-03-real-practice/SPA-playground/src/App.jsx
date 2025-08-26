import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
