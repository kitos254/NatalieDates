import React, { useState, useEffect } from "react";

const Updates = () => {
  const launchDate = new Date("February 13, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600); // Detect small screens

  function getTimeRemaining() {
    const now = new Date().getTime();
    const timeDifference = launchDate - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
      seconds: Math.floor((timeDifference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    // Resize listener to update isSmallScreen state
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
      }}
    >
   
      <div
        style={{
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          background: isSmallScreen
            ? "linear-gradient(90deg,rgb(10, 7, 2),rgb(105, 21, 94),rgb(235, 146, 74),rgb(108, 92, 250))"
            : "linear-gradient(90deg,rgb(10, 7, 2),rgb(11, 50, 61),rgb(105, 21, 94),rgb(235, 146, 74),rgb(198, 238, 179),rgb(108, 92, 250))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontSize: isSmallScreen ? "22px" : "45px", // Responsive font size
          fontWeight: "bolder",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
          width: "100%",
          color: "white",
        }}
      >
        <div style={{ flex: 1 }}>Natalie Updates</div>

       
        <div
          style={{
            display: "flex",
            gap: isSmallScreen ? "10px" : "25px",
            fontSize: isSmallScreen ? "10px" : "20px", 
            fontWeight: "bold",
            background: "rgba(255, 255, 255, 0.2)",
            padding: "5px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            paddingBottom: "0    ",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <span>{timeLeft.days}</span>
            <p style={{ fontSize: isSmallScreen ? "10px" : "20px" }}>DD</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>{timeLeft.hours}</span>
            <p style={{ fontSize: isSmallScreen ? "10px" : "20px" }}>Hrs</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>{timeLeft.minutes}</span>
            <p style={{ fontSize: isSmallScreen ? "10px" : "20px" }}>Min</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>{timeLeft.seconds}</span>
            <p style={{ fontSize: isSmallScreen ? "10px" : "20px" }}>Sec</p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontSize: isSmallScreen ? "12px" : "20px", // Responsive font size
          fontWeight: "normal",
          fontStyle: "italic",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          width: "100%",
          color: "black",
        }}
      >
        The countdown is on! Mark your calendars! 📅
      </div>

      <div style={{
         borderRadius: "10px",
         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
         background: "black",
         backgroundSize: "cover",
         backgroundPosition: "center",
         fontSize: isSmallScreen ? "22px" : "45px", // Responsive font size
         fontWeight: "bolder",
         display: "block",
         alignItems: "center",
         padding: "5px",
         width: "100%",
         color: "white",

      }}>
        <h1
          style={{
            textAlign:"center",
            fontSize: isSmallScreen ? "28px" : "36px",
            fontWeight: "bold",
            marginBottom: "10px",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          🚀 Exciting News from Natalie Dates! 💖
        </h1>

        <p
          style={{
            fontSize: isSmallScreen ? "16px" : "18px",
            maxWidth: "600px",
            marginBottom: "20px",
            lineHeight: "1.6",
          }}
        >
          We are thrilled to announce that our **official dating app** is
          launching on **February 13, 2025**! Get ready to experience seamless
          connections, exciting matches, and a whole new way to find love. Stay
          tuned! 🎉
        </p>

        <p
          style={{
            fontSize: "14px",
            marginTop: "15px",
            opacity: "0.8",
          }}
        >
          The countdown is on! Mark your calendars! 📅
        </p>
      </div>
    </div>
  );
};

export default Updates;
