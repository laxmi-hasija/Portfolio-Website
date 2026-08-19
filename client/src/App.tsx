

import "./App.css";
import Home from "./pages/Home";

import ThankYou from "./pages/ThankYou";

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;