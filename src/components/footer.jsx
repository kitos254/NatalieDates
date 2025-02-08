import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#333",
        color: "#fff",
        overflowX: "hidden",
        marginLeft: "0",
        top: "10px",
        left: "10px",
        width: isSmallScreen ? "94.5%" : "97.5%",
        marginTop: "70px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
       
      }}
    >
      © 2025 Natalie’s Dates. All rights reserved.
    </footer>
  );
};

export default Footer;
