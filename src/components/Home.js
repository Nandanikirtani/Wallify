import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home(props) {
  const textColor = props.mode === "dark" ? "#fffbeb" : "black";
  const backgroundColor = props.mode === "dark" ? "#ff9f1c" : "#2338a9";
  const butColor = props.mode === "light" ? "white" : "black";
  const pColor = props.mode === "light" ? "#073b3a" : "#99f7ce";
  const cardColor = props.mode === "light" ? "#4f000b" : "#b7e4c7";

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const getCardStyle = (index) => ({
    transition: "all 0.3s ease-in-out",
    transform: hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
    boxShadow:
      hoveredIndex === index
        ? "0 8px 20px rgba(0, 0, 0, 0.2)"
        : "0 2px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    width: "18rem",
    color: butColor,
    backgroundColor: cardColor,
  });

  const cards = [
    {
      title: "Financial Tools",
      text: "Includes budgeting, savings planners, SIP & EMI calculators, and investment portfolio tracking — all in one intuitive app.",
    },
    {
      title: "Smart Financial Insights",
      text: "Offers personalized financial tips and predictive analytics to help users make better money decisions based on spending patterns.",
    },
    {
      title: "Learning Hub",
      text: "Provides easy-to-understand lessons on budgeting, investing, credit scores, and more — perfect for beginners and advanced users alike.",
    },
    {
      title: "Secure and Private",
      text: "Ensures user data is encrypted and protected with secure authentication, so financial information remains safe and confidential.",
    },
  ];

  return (
    <>
    
      <div
        className="head"
        style={{
          width: "50%",
          fontSize: "45px",
          marginLeft: "160px",
          marginTop: "100px",
          fontWeight: "500",
          color: textColor,
        }}
      >
        
        <p className="" style={{ marginTop: "200px" }}>
          What’s stopping you from making better financial decisions today?
        </p>
      </div>
      <p
        style={{
          fontSize: "25px",
          marginLeft: "160px",
          color: pColor,
          fontWeight: "500",
        }}
      >
        <i> Take Control of Your Financial Future with Wallify</i>
      </p>

      <Link
        to="/login"
        className="btn startBut fw-semibold rounded border-0 my-4 fs-5"
        style={{
          marginLeft: "160px",
          height: "50px",
          width: "220px",
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

      <div className="text-center">
        <img
          src="/MoneyJar.png"
          className="rounded img-fluid float-end me-5 "
          alt="Money Jar"
          style={{ width: "550px", marginTop: "-370px" }}
        />
      </div>

      {/*Why wallify section */}
      <div
        className="container text-center"
        style={{ color: textColor,marginTop:"200px", margin: "100px" }}
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
        <div className="row g-5">
          {cards.map((card, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="card p-3"
                style={getCardStyle(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}
