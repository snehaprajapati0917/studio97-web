import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

import AdminLogin from "./admin/AdminLogin";
import Admin from "./admin/Admin";
import PortfolioAdmin from "./admin/PortfolioAdmin";
import "./css/responsive.css";


function AppContent() {

  const location = useLocation();

  
   const hideLayout =
  location.pathname.startsWith("/dashboard") ||
  location.pathname === "/admin";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Admin />} />
        <Route path="/dashboard/portfolio" element={<PortfolioAdmin />} />

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;