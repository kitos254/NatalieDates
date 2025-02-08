import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../components/footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle Form Submission
  const submitReview = (e) => {
    e.preventDefault();

    // Show Toast Notification
    toast.error("Only subscribed users can leave a review.", {
      position: "top-center",
      autoClose: 3000,
    });

    // Reset Form
    setName("");
    setImage(null);
    setTitle("");
    setComment("");
    setRating(0);
  };

  // Image groups: Each has 3 rotating images
  const reviews = [
    {
      id: 14,
      name: "Tumamela",
      title: "Reliable Service",
      comment:
        "I'm from South Africa and I really appreciate this kenyan Platform. I did't know if it will work but I am glad for the experience I've had so far. Thanks Natalie's Dates",
      img: "pro14.jpg",
      rating: 5,
    },
    {
      id: 1,
      name: "Peter Motiso",
      title: "Customer support",
      comment:
        "Once I made a payment, a customer service agent reached out to help me.",
      img: "pro1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Anonymous",
      title: "Form ya sugarmummy",
      comment:
        "Ukitaka sugarmummy wakuu, hapa ndio place 💯💯✔ Nimejiwahii kadhaa 😍😍😍😍  We register na uchil. Hawa wasee watakupanga. Usiwe na was😅😅",
      img: "pro3.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Karanja",
      title: "Nice Dating Experience",
      comment: "I have met a whole number of new people.",
      img: "pro2.jpg",
      rating: 4,
    },

    {
      id: 4,
      name: "Emmaculate Ndungu",
      title: "Met Someone Special",
      comment:
        "I met someone amazing within a few weeks of joining! But muangalie hiyo side ya wababa. Leteni wazungu kadhaa",
      img: "pro4.jpg",
      rating: 5,
    },
    {
      id: 5,
      name: "David Martinez",
      title: "Good Experience Overall",
      comment:
        "Nice platform with great features, but can improve in some areas. I'm glad to have met alot of beatifull african women",
      img: "pro5.jpg",
      rating: 4,
    },
    {
      id: 6,
      name: "Martin Kim",
      title: "Fast Response from Support",
      comment: "Had a billing issue, and it was resolved in no time. Kudos!",
      img: "pro6.jpg",
      rating: 5,
    },
    {
      id: 7,
      name: "Ndirangu",
      title: "Lots of Interesting People",
      comment: "I love the diversity of people I have met here.",
      img: "pro7.jpg",
      rating: 5,
    },
    {
      id: 8,
      name: "Nobaa KE",
      title: "Highly Recommended",
      comment: "Smooth interface, easy to use, and great customer support!",
      img: "pro8.jpg",
      rating: 5,
    },
    {
      id: 9,
      name: "Olivia Taylor",
      title: "Better Than Expected",
      comment:
        "Was skeptical at first but ended up really liking the platform.",
      img: "pro9.jpg",
      rating: 4,
    },
    {
      id: 10,
      name: "Kennedy Mutua",
      title: "Worth it",
      comment:
        "Trust the process wakuu. Hamtaregret. Hii platform imenijenga. Kuna wazungu wengi by the way",
      img: "pro10.jpg",
      rating: 5,
    },
    {
      id: 11,
      name: "Sophia Hernandez",
      title: "Lots of Genuine People",
      comment: "I have connected with so many wonderful people here.",
      img: "pro11.jpg",
      rating: 5,
    },
    {
      id: 12,
      name: "Pauline",
      title: "One of the Best Platforms",
      comment: "Its been a nice platform so far. I highly recomend it",
      img: "pro12.jpg",
      rating: 5,
    },
    {
      id: 13,
      name: "Robinson Mwendwa",
      title: "Rich babies",
      comment:
        "SugarMummy huku wanabamba. Very beautifull and curvy alafu wako madoo manze",
      img: "pro13.jpg",
      rating: 4,
    },

    {
      id: 15,
      name: "Emily Lewis",
      title: "Excellent Support",
      comment: "Support team was very polite and professional!",
      img: "pro15.jpg",
      rating: 5,
    },
    // More reviews up to 60 following the same structure...
  ];

  const [visibleReviews, setVisibleReviews] = useState(3);

  // Calculate overall rating
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const overallRating = (totalRating / reviews.length).toFixed(1);

  // Function to show more reviews
  const showMoreReviews = () => {
    setVisibleReviews((prev) => prev + 5);
  };

  const showLessReviews = () => {
    setVisibleReviews(3);
  };

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
        backgroundImage: ` url('bgmain.jpg')`,
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
        marginLeft: "0",
        color: "white",
        top: "0px",
        left: "0px",
        width: isSmallScreen ? "92%" : "98%",
        marginTop: "70px",
        overflow: "hidden",
        padding: "1rem",
        position: "absolute",
        overflowY: "hidden",
      }}
    >
      {/* Title Section */}
      <div
        style={{
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          backgroundImage: `url('bgheader.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "5rem", // Reduced height
          padding: "5px", // Reduced padding
          width: "100%",
          color: "white",
        }}
      >
        <motion.h1
          style={{
            fontSize: isSmallScreen ? "22px" : "45px", // Slightly reduced font size
            fontWeight: "800",
            color: "rgb(252, 252, 255)",
            textShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "3px", // Reduced spacing between title and tagline
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
              fontSize: isSmallScreen ? "22px" : "45px", // Adjusted size for compact look
              background:
                "linear-gradient(to right,rgb(164, 148, 245), rgb(228, 206, 240))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
              letterSpacing: "1px", // Reduced letter spacing
            }}
          >
            Natalie Dates
          </span>
        </motion.h1>

        <motion.p
          style={{
            fontSize: isSmallScreen ? "9px" : "14px", // Slightly reduced tagline font size
            fontWeight: "500",
            fontStyle: "italic",
            color: "white",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            letterSpacing: "0.5px", // Reduced letter spacing
            marginTop: "2px", // Minimized space above the tagline
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

      <div
        style={{
          width: isSmallScreen ? "91%" : "98%",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          fontFamily: "'Poppins', sans-serif",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <h2 style={{ fontSize: "22px", fontWeight: "bold", margin: 0 }}>
            💖 User Love Notes
          </h2>
          <strong style={{ fontSize: "20px", color: "#ffd700" }}>
            ⭐ {overallRating}
          </strong>
        </div>

        {reviews.slice(0, visibleReviews).map((review, index) => (
          <div
            key={review.id}
            style={{
              marginBottom: "10px",
              display: "flex",
              borderRadius: "10px",
              alignItems: "center",
              padding: "10px",
              backgroundColor: index % 2 === 0 ? "#ffebf0" : "#ffc2d1",
              color: "#333",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.05)",
            }}
          >
            <img
              src={review.img}
              alt={review.name}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "10px",
                border: "2px solid #ff4d79",
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    marginBottom: "4px",
                    fontSize: "16px",
                    color: "#ff3366",
                  }}
                >
                  {review.name} 💕
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#ff9800",
                    whiteSpace: "nowrap",
                  }}
                >
                  {"⭐".repeat(review.rating)}
                </p>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#ff3366",
                  fontStyle: "italic",
                  fontWeight: "500",
                }}
              >
                "{review.title}"
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#555",
                }}
              >
                {review.comment}
              </p>
            </div>
          </div>
        ))}

        {/* Show More Button */}
        {(visibleReviews < reviews.length || visibleReviews > 3) && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            {visibleReviews > 3 && (
              <span
                onClick={showLessReviews}
                style={{
                  cursor: "pointer",
                  fontSize: "16px",
                  color: "#fff",
                  backgroundColor: "#ff4d79",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  transition: "all 0.3s",
                  fontWeight: "bold",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              >
                Show Less ⬆️
              </span>
            )}
            {visibleReviews < reviews.length && (
              <span
                onClick={showMoreReviews}
                style={{
                  cursor: "pointer",
                  fontSize: "16px",
                  color: "#fff",
                  backgroundColor: "#ff4d79",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  transition: "all 0.3s",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
              >
                Show More ⬇️
              </span>
            )}
          </div>
        )}
      </div>

      <div
        style={{
          width: isSmallScreen ? "90%" : "98%",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          fontFamily: "'Poppins', sans-serif",
          color: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          💕 Leave a Love Note
        </h2>

        <form
          onSubmit={submitReview}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              fontSize: "14px",
              outline: "none",
              color: "#333",
            }}
          />

          {/* Profile Picture Upload */}
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                marginBottom: "10px",
                border: "2px solid #ff4d79",
                cursor: "pointer",
              }}
            >
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <p style={{ color: "#ff4d79", fontSize: "12px" }}>
                  Upload Photo
                </p>
              )}
            </div>
          </label>

          {/* Title Input */}
          <input
            type="text"
            placeholder="Title (e.g., 'Loved this!')"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              fontSize: "14px",
              outline: "none",
              color: "#333",
            }}
          />

          {/* Review Textarea */}
          <textarea
            placeholder="Write your review here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows="4"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              fontSize: "14px",
              outline: "none",
              color: "#333",
              resize: "none",
            }}
          ></textarea>

          {/* Star Rating Selection */}
          <div style={{ textAlign: "center", margin: "10px 0" }}>
            <p style={{ marginBottom: "5px", fontWeight: "bold" }}>
              Rate your experience:
            </p>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  color: rating >= star ? "gold" : "#ddd", // Ensure color updates correctly
                  transition: "color 0.3s",
                  margin: "0 3px",
                }}
              >
                ★
              </span>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: "#ff4d79",
              border: "none",
              padding: "10px",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background 0.3s",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.8")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            💌 Submit Review
          </button>
        </form>
      </div>

      <div
        style={{
          width: "110%",
          marginLeft: "-20px",
          marginBottom: "-20px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
