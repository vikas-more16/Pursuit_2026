import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Accomodation from "./Pages/Accomodation";
import Events from "./Pages/Events";
import Workshops from "./Pages/Workshops";
import Speakers from "./Pages/Speakers";
import Sponsers from "./Pages/Sponsers";
import ContactUs from "./Pages/ConstactUs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import CoreTeam from "./Pages/CoreTeam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages WITH Navbar, Sidebar, Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/events" element={<Events />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponser" element={<Sponsers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/coreteam" element={<CoreTeam />} />
        </Route>

        {/* Pages WITHOUT Navbar / Sidebar / Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
