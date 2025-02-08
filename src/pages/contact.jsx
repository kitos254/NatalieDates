import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const isFormValid = formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 2000); // Simulating a network request
  };

  return (
    <div
      style={{
        marginLeft: "-20px",
        background: "#223223",
        color: "white",
        width: "100%",
        padding: "2rem",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: "center",
          fontSize: isSmallScreen ? "18px" : "28px",
          marginBottom: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Contact Us
      </motion.div>

      <div
        style={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Contact Details */}
        <div
          style={{
            flex: 1,
            padding: "10px",
            background: "#2c2c2c",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            marginLeft: isSmallScreen ? "-20px" : "none",
            width: "98%",
          }}
        >
          <h3
            style={{ borderBottom: "2px solid white", paddingBottom: "0.5rem" }}
          >
            Our Contact Details
          </h3>
          <p>
            <FaEnvelope style={{ marginRight: "10px", color: "#FFD700" }} />{" "}
            natalie.dates.org@gmail.com
          </p>
          <p>
            <FaPhone style={{ marginRight: "10px", color: "#FFD700" }} />
            **********
          </p>

          {/* Social Media Links */}
          <h3
            style={{
              marginTop: "1rem",
              borderBottom: "2px solid white",
              paddingBottom: "0.5rem",
            }}
          >
            Follow Us
          </h3>
          <div style={{ display: "block", gap: "15px", marginTop: "10px" }}>
            <div>
              <a
                href="https://www.instagram.com/sugarmummyconnect254?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#E4405F",
                  fontSize: "24px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                  fontStyle: "italic",
                }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                <FaInstagram />{" "}
                <span
                  style={{
                    color: "rgb(72, 72, 247)",
                    fontWeight: "initial",
                    fontSize: "18px",
                  }}
                >
                  @Natalie's Dates
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://t.me/nataliedates"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0088CC",
                  fontSize: "24px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                  fontStyle: "italic",
                }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                <FaTelegramPlane />{" "}
                <span
                  style={{
                    color: "rgb(72, 72, 247)",
                    fontWeight: "initial",
                    fontSize: "18px",
                  }}
                >
                  @Natalie's Dates
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=61571321499312"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1877F2",
                  fontSize: "24px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                  fontStyle: "italic",
                }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                <FaFacebookF />{" "}
                <span
                  style={{
                    color: "rgb(72, 72, 247)",
                    fontWeight: "initial",
                    fontSize: "18px",
                  }}
                >
                  @Natalie's Dates
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://tiktok.com"
                target="blank"
                rel="noopener noreferrer"
                style={{
                  color: "#69C9D0",
                  fontSize: "24px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                  fontStyle: "italic",
                }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                <FaTiktok />{" "}
                <span
                  style={{
                    color: "rgb(72, 72, 247)",
                    fontWeight: "initial",
                    fontSize: "18px",
                  }}
                >
                  @Natalie's Dates
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com"
                target="blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1DA1F2",
                  fontSize: "24px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                  fontStyle: "italic",
                }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                <FaTwitter />{" "}
                <span
                  style={{
                    color: "rgb(72, 72, 247)",
                    fontWeight: "initial",
                    fontSize: "18px",
                  }}
                >
                  @Natalie's Dates
                </span>
              </a>
            </div>

            <div>
              <a
                href="https://whatsapp.com/channel/0029Vb5E1rGHbFUxqoCjIm0Y"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#25D366",
                  fontSize: "24px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                  fontStyle: "italic",
                }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                <FaWhatsapp />{" "}
                <span
                  style={{
                    color: "rgb(72, 72, 247)",
                    fontWeight: "initial",
                    fontSize: "18px",
                  }}
                >
                  @Natalie's Dates
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            flex: 1,
            width: "98%",
            padding: "10px",
            background: "#2c2c2c",
            paddingLeft: "5px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            marginLeft: isSmallScreen ? "-20px" : "none",
          }}
        >
          <h3
            style={{ borderBottom: "2px solid white", paddingBottom: "0.5rem" }}
          >
            Send Us a Message
          </h3>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingLeft: "-10px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "12px",
                borderRadius: "5px",
                border: "none",
                width: "96%",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: "12px",
                borderRadius: "5px",
                border: "none",
                width: "96%",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{
                padding: "12px",
                borderRadius: "5px",
                border: "none",
                width: "96%",
              }}
            ></textarea>
            <button
              type="submit"
              disabled={!isFormValid || loading}
              style={{
                backgroundColor: isFormValid ? "#28a745" : "#6c757d",
                color: "white",
                padding: "12px",
                borderRadius: "5px",
                border: "none",
                cursor: isFormValid ? "pointer" : "not-allowed",
                fontWeight: "bold",
                transition: "0.3s ease",
                width: "99%",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
