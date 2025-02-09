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
  const [countdown, setCountdown] = useState(3);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isInAppBrowser()) {
      setShowMessage(true);
      let timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            redirectToBrowser(); // Redirect after countdown
          }
          return prev - 1;
        });
      }, 1000); // Update every second

      return () => clearInterval(timer); // Cleanup interval
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
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3>Natalie Dates is redirecting...</h3>
            <p>Redirecting to your default browser in: <strong>{countdown}</strong> seconds</p>
          </div>
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
