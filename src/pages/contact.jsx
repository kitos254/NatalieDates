import { div } from "framer-motion/client";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: ` url('bgmain.jpg')`,
        marginLeft: "0",
        color: "white",
        top: "10px",
        left: "10px",
        width: "97%",
        marginTop:"70px",
        overflowX:"hidden",
        padding: "1rem",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        position:"absolute",
      }}
    >
      <h1>Contact Us</h1>
    </div>
  );
};

export default Contact;
