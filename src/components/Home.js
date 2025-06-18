import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home(props) {
  const textColor = props.mode === "dark" ? "#fffbeb" : "black";
  const backgroundColor = props.mode === "dark" ? "#ff9f1c" : "#2338a9";
  const butColor = props.mode === "light" ? "white" : "black";
  const pColor = props.mode === "light" ? "#073b3a" : "#99f7ce";
  const cardColor = props.mode === "light" ? "#4f000b" : "#b7e4c7";
  const spColor = props.mode === "light" ? "#16697a" : "#f78764";

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const getCardStyle = (index) => ({
    transition: "all 0.3s ease-in-out",
    transform: hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
    boxShadow:
      hoveredIndex === index
        ? "0 8px 20px rgba(0, 0, 0, 0.2)"
        : "0 2px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    width: "100%",
    color: butColor,
    backgroundColor: cardColor,
  });

  const [hoverbox, setHoverBox] = useState(null);
  const boxStyle = (k) => ({
    backgroundColor: hoverbox === k ? "white" : "",
    color: hoverbox === k ? "black" : "white",
    transition: "all 0.5s ease-in-out",
    width: "100%",
    maxWidth: "520px",
  });

  const cards = [
    {
      icon: "bi-receipt",
      title: "Financial Tools",
      text: "Includes budgeting, savings planners, SIP & EMI calculators, and investment portfolio tracking — all in one intuitive app.",
    },
    {
      icon: "bi-lightbulb",
      title: "Smart Financial Insights",
      text: "Offers personalized financial tips and predictive analytics to help users make better money decisions based on spending patterns.",
    },
    {
      icon: "bi-mortarboard",
      title: "Learning Hub",
      text: "Provides easy-to-understand lessons on budgeting, investing, credit scores, and more — perfect for beginners and advanced users alike.",
    },
    {
      icon: "bi-lock",
      title: "Secure and Private",
      text: "Ensures user data is encrypted and protected with secure authentication, so financial information remains safe and confidential.",
    },
  ];

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <h1
              className="fw-semibold"
              style={{
                fontSize: "clamp(28px, 5vw, 50px)",
                color: textColor,
              }}
            >
              What’s stopping you from making{" "}
              <span style={{ color: spColor }}>
                better financial decisions today?
              </span>
            </h1>

            <p
              style={{
                fontSize: "20px",
                color: pColor,
                fontWeight: "500",
                marginTop: "20px",
              }}
            >
              <i>Take Control of Your Financial Future with Wallify</i>
            </p>

            <Link
              to="/login"
              className="btn startBut fw-semibold rounded border-0 my-4 fs-5"
              style={{
                height: "50px",
                width: "250px",
                color: butColor,
                background: backgroundColor,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              Track Your Expenses
            </Link>
          </div>

          <div className="col-lg-6 col-md-12 text-center">
            <img
              src="/Homeimg.png"
              className="img-fluid rounded"
              alt="Money Jar"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/*Why wallify section */}
      <div
        className="container text-center mb-5 px-3 mx-auto mt-5"
        style={{ color: textColor }}
      >
        <h1>Why Wallify?</h1>
        <div className="row justify-content-center">
          <div className="col-6">
            <p className="fs-5 ">
              <i>
                Wallify is a modern financial companion app that provides
                budgeting tools, learning resources, predictive insights, and
                secure portfolio tracking — all in one clean, user-friendly
                interface.
              </i>
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className=" row g-5 justify-content-center">
          {cards.map((card, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div
                className="card p-3"
                style={getCardStyle(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <i className={`bi ${card.icon} fs-2 card-icon me-2`}></i>
                    <h5 className="card-title mb-0">{card.title}</h5>
                  </div>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="s d-flex flex-column align-items-center justify-content-center text-center text-white "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/Homeimg2.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          // opacity: "0.7",
        }}
      >
        <h2
          className="mt-5 p-3 border border-white rounded"
          onMouseEnter={() => setHoverBox(1)}
          onMouseLeave={() => setHoverBox(null)}
          style={boxStyle(1)}
        >
          Never overspend again
        </h2>
        <h2
          className="mt-5 p-3 border border-white rounded"
          onMouseEnter={() => setHoverBox(2)}
          onMouseLeave={() => setHoverBox(null)}
          style={boxStyle(2)}
        >
          Track where your money goes
        </h2>
        <h2
          className="mt-5 p-3 border border-white rounded"
          onMouseEnter={() => setHoverBox(3)}
          onMouseLeave={() => setHoverBox(null)}
          style={boxStyle(3)}
        >
          Visualize your spending habits
        </h2>
      </div>

      <div className="container mt-5 mb-5">
        <h1
          className="text-center mb-5"
          style={{ color: textColor, marginTop: "150px" }}
        >
          Success Stories From Smart Savers
        </h1>

        <div className="row g-4 justify-content-center">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="p-3 card h-100"
              style={{
                border: "2px solid #DDBE18",
              }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <img
                    className="rounded-circle me-2 border border-black"
                    style={{ width: "40px", height: "40px" }}
                    src="/profile1.avif"
                    alt=""
                  />
                  <h3 className="mb-0">Harish</h3>
                </div>
                <div className="d-flex ms-5 mt-0 mb-2">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star text-warning"></i>
                </div>
                <p>
                  Wallify helped me take control of my spending. I never
                  realized how much I could save with just a little tracking!
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="p-3 card h-100"
              style={{
                border: "2px solid #DDBE18",
              }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <img
                    className="rounded-circle me-2 border border-black"
                    style={{ width: "40px", height: "40px" }}
                    src="/profile2.avif"
                    alt=""
                  />
                  <h3 className="mb-0">Jim</h3>
                </div>
                <div className="d-flex ms-5 mt-0 mb-2">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star text-warning"></i>
                </div>
                <p>
                  I’ve tried several budgeting apps, but Wallify’s simplicity
                  and insights stand out. It’s now part of my daily routine.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="p-3 card h-100"
              style={{
                border: "2px solid #DDBE18",
              }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <img
                    className="rounded-circle me-2 border border-black"
                    style={{ width: "40px", height: "40px" }}
                    src="/profile3.png"
                    alt=""
                  />
                  <h3 className="mb-0">Lucy</h3>
                </div>
                <div className="d-flex ms-5 mt-0 mb-2">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star text-warning me-1"></i>
                  <i className="bi bi-star text-warning"></i>
                </div>
                <p>
                  The expense tracker and SIP calculator are game-changers.
                  Wallify made managing money feel easy and even fun!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <h1
          className="text-center mb-5"
          style={{ color: textColor, marginTop: "100px" }}
        >
          Trusted by Thousands, Guided by Experts
        </h1>

        <div
          className="row text-center"
          style={{ color: spColor, marginTop: "70px" }}
        >
          <div className="col-md-4">
            <h1 style={{ fontSize: "60px" }}>15k+</h1>
          </div>
          <div className="col-md-4">
            <h1 style={{ fontSize: "60px" }}>30+</h1>
          </div>
          <div className="col-md-4">
            <h1 style={{ fontSize: "60px" }}>10+</h1>
          </div>
        </div>

        <div className="row text-center mt-3" style={{ color: textColor }}>
          <div className="col-md-4">
            <h3>Users</h3>
          </div>
          <div className="col-md-4">
            <h3>Chief Experts</h3>
          </div>
          <div className="col-md-4">
            <h3>Years of Experience</h3>
          </div>
        </div>
      </div>

      <div
        className="container rounded-5 mt-5 text-center mb-5"
        style={{
          height: "300px",
          color: butColor,
          backgroundColor: cardColor,
          paddingTop: "20px",
        }}
      >
        <h3 className="">Subscribe for updates & tips</h3>
        <p className="mt-4">
          Empower your inbox with content that inspires action—budgeting tools,
          investment know-how, and the confidence to make bold financial
          decisions.
        </p>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="custom-placeholder p-3"
            style={{
              height: "50px",
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "#a22c29",
              color: "white",
              border: "none",
              outline: "none",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          />
          <button
            className="text-white"
            style={{
              height: "50px",
              width: "100%",
              maxWidth: "150px",
              border: "none",
              outline: "none",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              backgroundColor: "#c75146",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
