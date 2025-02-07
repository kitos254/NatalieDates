import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";// Ensure Footer is imported
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/homepage";

const App = () => {
  return (
    <Router>
     
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
        <Toaster />
      
    </Router>
  );
};

export default App;
