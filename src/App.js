import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/home/home";
import Investor from "./components/investor/investor";
import Seller from "./components/seller/seller";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Investor" element={<Investor />} />
        <Route path="/Seller" element={<Seller />} />
      </Routes>
    </Router>
  );
}

export default App;
