import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Homepage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeImages, setActiveImages] = useState([]);
  const [background, setBackground] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = isSmallScreen ? "bg2.jpg" : "bg3.jpg";
    img.onload = () => setBackground(`url(${img.src})`);
  }, [isSmallScreen]);

  // Image groups: Each has 3 rotating images
  const imageGroups = [
    {
      images: ["couple1.jpg", "couple2.jpg", "couple3.jpg", "couple4.jpg"],
      heading: "Find Love, Meet New People, Create Memories!",
      text: "Embark on a journey of love and connection, meeting people from all corners of the world.",
      text2:
        "Are you ready to embrace new connections and unforgettable moments? Whether you're searching for true love, meaningful friendships, or simply someone to share life's special moments with, we’re here to make it happen. Connect with like-minded singles, engage in real conversations, and build lasting relationships. Love is just a conversation away—start your journey today!",
    },
    {
      images: [
        "girl5.jpg",
        "girl1.jpg",
        "girl2.jpg",
        "man.jpg",
        "girl3.jpg",
        "girl4.jpg",
      ],
      heading: "Explore various types of relationship!",
      text: "Get ready to embrace new experiences and enjoy the very best that life has to offer, filled with excitement, passion, and endless possibilities.",
      text2:
        "Explore a diverse spectrum of relationships, from casual encounters to deeply intimate and meaningful connections. Whether you're seeking excitement, companionship, or long-term emotional fulfillment, you can connect with affluent partners who are willing to support you while fostering a genuine and lasting bond built on trust, respect, and shared experiences.",
    },
    {
      images: ["add1.jpg", "add2.jpg", "add3.jpg", "add4.jpg"],
      heading: "Seemingless connectivity!",
      text: "Find love without limits through seamless video calls and chats. One message could change everything!",
      text2:
        "Step into a world where love knows no boundaries. Dive into the ultimate dating experience with seamless video calls and endless chats, connecting you with millions of people from every corner of the globe. Whether you're seeking a deep, meaningful relationship or a fun, spontaneous connection, this is where hearts meet and sparks fly. Let every conversation bring you closer to someone special, turning moments into memories and strangers into soulmates. Love is just a message away—are you ready to embrace it?",
    },
  ];

  useEffect(() => {
    setActiveImages(imageGroups.map((group) => group.images[0]));

    const interval = setInterval(() => {
      setActiveImages((prev) =>
        prev.map((img, i) => {
          const currentIndex = imageGroups[i].images.indexOf(img);
          return imageGroups[i].images[
            (currentIndex + 1) % imageGroups[i].images.length
          ]; // Rotate images
        })
      );
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundImage: ` url('bg1.jpg')`,
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
      }}
    >
      {/* Title Section */}
      <div
        style={{
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          backgroundImage: ` url('back.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "7rem",
          padding: "10px",
          width: "100%",
          color: "white",
        }}
      >
        <motion.h1
          style={{
            fontSize: isSmallScreen ? "30px" : "50px",
            fontWeight: "800",
            color: "#db2777",
            textShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "5px",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to{" "}
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: isSmallScreen ? "30px" : "50px",
              color: "#db2777",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
              letterSpacing: "1.5px",
              background: "linear-gradient(to right, #db2777, #ff8a00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Natalie Dates
          </span>
        </motion.h1>
        <motion.p
          style={{
            fontSize: isSmallScreen ? "10px" : "15px",
            fontWeight: "500",
            fontStyle: "italic",
            color: "#555",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            letterSpacing: "1px",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          "Where Connections Blossom"
        </motion.p>
      </div>

      {/* Image-Text Layout */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: "40px",
          padding: "0px",
          backgroundImage: ` url('bg2.png')`,
        }}
      >
        {imageGroups.map((group, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              backgroundImage: background,
              flexDirection: isSmallScreen
                ? "column"
                : index % 2 === 0
                ? "row"
                : "row-reverse",
              alignItems: "center",
              gap: "40px",
              paddingLeft: isSmallScreen ? "0" : "30px",
              paddingRight: isSmallScreen ? "0" : "30px",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {/* Image Container */}
            <div
              style={{
                position: "relative",
                width: isSmallScreen ? "100%" : "60%",
                maxWidth: "350px",
                height: "450px",
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.img
                key={activeImages[index]}
                src={activeImages[index]}
                alt={`Image Group ${index + 1}`}
                initial={{ opacity: 0.5, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 2, ease: "anticipate" }}
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              />

              {/* Hover Text Effect */}
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  hoveredIndex === index
                    ? { y: 0, opacity: 1 }
                    : { y: "100%", opacity: 0 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  textAlign: "center",
                  borderRadius: "0 0 12px 12px",
                  fontSize: isSmallScreen ? "11px" : "18px",
                  fontWeight: "normal",
                  letterSpacing: "1px",
                }}
              >
                {group.text}
              </motion.div>
            </div>

            {/* Text Section */}

            <p
              style={{
                width: isSmallScreen ? "86%" : "68%",
                fontSize: isSmallScreen ? "11px" : "18px",
                fontWeight: "300",
                color: "#333",
                textAlign: "left",
                padding: "20px",
                fontStyle: "italic",
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4 style={{ fontSize: isSmallScreen ? "12px" : "20px" }}>
                {group.heading}
              </h4>
              {group.text2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
