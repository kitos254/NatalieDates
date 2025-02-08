import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer"; // Ensure Footer is imported
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/homepage";
import Updates from "./pages/update";
import Contact from "./pages/contact";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "89vh", // Ensures the page fills the viewport
      }}
    >
      <Router>
        <Navbar />
        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
           
            <Route path="/updates" element={<Updates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Routes> <Route path="/" element={<HomePage />} /></Routes>
        <Toaster />
      </Router>
    </div>
  );
};

export default App;
