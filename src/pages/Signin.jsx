import React, { useState, useEffect } from "react";

const Signin = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [velocity, setVelocity] = useState({ x: 2, y: 2 });
  const [bgColor, setBgColor] = useState("#000");
  const [textColor, setTextColor] = useState("#fff");
  const elementHeight = 130;
  const [boxSize, setBoxSize] = useState(1);

  const getBackgroundImage = () => {
    return window.innerWidth <= 768
      ? "url('dance2.jpg')"
      : "url('dance1.jpg')";
  };

  const [bgImage, setBgImage] = useState(getBackgroundImage());

  useEffect(() => {
    const moveText = () => {
      setPosition((prev) => {
        let newTop = prev.top + velocity.y;
        let newLeft = prev.left + velocity.x;
        let newVelocity = { ...velocity };
        let hitWall = false;
        let bottomLimit = window.innerHeight - 30 - elementHeight;

        if (newTop <= 0 || newTop >= bottomLimit) {
          newVelocity.y = -newVelocity.y;
          hitWall = true;
        }
        if (newLeft <= 0 || newLeft >= window.innerWidth - 150) {
          newVelocity.x = -newVelocity.x;
          hitWall = true;
        }

        if (hitWall) {
          setBgColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
          setTextColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        }

        setVelocity(newVelocity);
        return { top: newTop, left: newLeft };
      });
    };

    const interval = setInterval(moveText, 10);

    const handleResize = () => {
      setBgImage(getBackgroundImage());
      setPosition((prev) => ({
        top: Math.min(prev.top, window.innerHeight - 30 - elementHeight),
        left: Math.min(prev.left, window.innerWidth - 150),
      }));
      setBoxSize(window.innerWidth > 768 ? 1.7 : 1);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [velocity]);

  return (
    <div
      className="background"
      style={{
        position: "absolute",
        width: "100vw",
        height: "calc(100vh - 120px)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: bgImage,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginLeft: "-25px",
        zIndex: "-200",
        paddingBottom: "0px",
        marginTop: "-30px",
        marginBottom: "20px",
        padding: "0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          fontSize: `${24 * boxSize}px`,
          fontWeight: "bold",
          color: textColor,
          backgroundColor: bgColor,
          padding: `${10 * boxSize}px`,
          borderRadius: "10px",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        Coming Soon
      </div>
    </div>
  );
};

export default Signin;
