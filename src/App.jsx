import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Tentangpage from "./pages/Tentangpage"
import Pembicarapage from "./pages/Pembicarapage"
import Kontakpage from "./pages/Kontakpage"

function App() {

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tentang-event" element={<Tentangpage />} />
        <Route path="/pembicara-event" element={<Pembicarapage />} />
        <Route path="/kontak-event" element={<Kontakpage />} />
      </Routes> */}

      {/* Footer */}
      {/* <Footer /> */}
    </>
  )
}

export default App
