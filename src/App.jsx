import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Exhibition from "./pages/Exhibition/Exhibition";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/exhibition" element={<Exhibition />} />
      </Routes>
    </div>
  );
}

export default App;
