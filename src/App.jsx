import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import MyBookings from "./pages/MyBookings.jsx";

export default function App() {
  return (
    <>
      <div className="topbar">Stay updated with the latest restaurants and maximize your dining experience with our platform.</div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </>
  );
}
