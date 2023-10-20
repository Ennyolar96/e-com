import Footer from "./components/libs/footer";
import Navigation from "./components/libs/navbar";
import Details from "./components/pages/Details";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="font-Montserrat bg-[#def] overflow-x-hidden">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}
