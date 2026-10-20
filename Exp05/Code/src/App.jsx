import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/landing_page/Hero";
import About from "./components/about/About";
import Support from "./components/support/Support";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen flex flex-col overflow-hidden 
      bg-white text-gray-900 font-sans antialiased">
        <Navbar />
        <main className="flex-1 min-h-0 overflow-hidden flex flex-col">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
