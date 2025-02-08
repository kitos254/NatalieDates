import React, { useEffect, useState } from "react";
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
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isInAppBrowser()) {
      setShowMessage(true);
      setTimeout(() => {
        redirectToBrowser();
      }, 3000); // Show message for 3 seconds before redirecting
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
      {showMessage && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <h3>Natalie Dates wants you to open in Chrome</h3>
          <p>Redirecting in 3 seconds...</p>
        </div>
      )}

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
