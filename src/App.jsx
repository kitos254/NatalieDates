import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer"; // Ensure Footer is imported
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/homepage";
import Updates from "./pages/update";
import Contact from "./pages/contact";
import Signin from "./pages/Signin";

const App = () => {
  return (
    <div
      style={{
        overflowX:"hidden",
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
            <Route path="/signin" element={<Signin />} />

          </Routes>
        </main>
        <Footer />
        <Routes> <Route path="/" element={<HomePage />} /></Routes>
        <Toaster />
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
