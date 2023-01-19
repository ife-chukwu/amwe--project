import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import WelcomeMessage from "./pages/WelcomeMessage"
import Exhibit from "./pages/Exhibit"
import Registration from "./pages/Registration"
import Conference from "./pages/Conference"
import Travel from "./pages/Travel"
import Awards from "./pages/Awards"
import Adverts from "./pages/Adverts"
import ErrorPage from "./pages/ErrorPage"
import Footer from "./components/Footer"



function App() {

  return (
    <div className="overflow-hidden">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="welcomeMessage" element={<WelcomeMessage />} />

        <Route path="exhibit" element={<Exhibit />} />
        <Route path="registration" element={<Registration />} />
        <Route path="conference" element={<Conference />} />
        <Route path="travel" element={<Travel />} />
        <Route path="awards" element={<Awards />} />
        <Route path="adverts" element={<Adverts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
