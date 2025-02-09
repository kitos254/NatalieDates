import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/homepage";
import Updates from "./pages/update";
import Contact from "./pages/contact";
import Signin from "./pages/Signin";
import { isInAppBrowser, redirectToBrowser } from "./utils/detectInAppBrowser";

const App = () => {
  useEffect(() => {
    if (isInAppBrowser()) {
      redirectToBrowser(); // Automatically redirect without delay
    }
  }, []);

  return (
    <div
      style={{
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "89vh",
      }}
    >
      <Router>
        <Navbar />
        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
