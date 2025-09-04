import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import CountUp from "react-countup";

export default function Home(props) {
  const textColor = props.mode === "dark" ? "#fffbeb" : "black";
  const backgroundColor = props.mode === "dark" ? "#ff9f1c" : "#2338a9";
  const butColor = props.mode === "light" ? "white" : "black";
  const pColor = props.mode === "light" ? "#073b3a" : "#99f7ce";
  const cardColor = props.mode === "light" ? "#4f000b" : "#b7e4c7";
  const spColor = props.mode === "light" ? "#16697a" : "#f78764";

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverbox, setHoverBox] = useState(null);

  const [text] = useTypewriter({
    words: ["better financial decisions?", "a secure money future?", "smart savings today?"],
    loop: true,
    delaySpeed: 2500,
  });

  const cards = [
    {
      icon: "bi-receipt",
      title: "Financial Tools",
      text: "Budgeting, savings planners, SIP & EMI calculators, and investment portfolio tracking — all in one app.",
    },
    {
      icon: "bi-lightbulb",
      title: "Smart Financial Insights",
      text: "Personalized tips and predictive analytics to help users make smarter money decisions.",
    },
    {
      icon: "bi-mortarboard",
      title: "Learning Hub",
      text: "Easy-to-understand lessons on budgeting, investing, and credit scores for beginners and pros alike.",
    },
    {
      icon: "bi-lock",
      title: "Secure and Private",
      text: "All data is encrypted with secure authentication, keeping your information safe.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div className="container mt-5" style={{ paddingTop: "120px" }}>
        <div className="row align-items-center">
          <motion.div
            className="col-lg-6 col-md-12 mb-4"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              className="fw-semibold"
              style={{ fontSize: "clamp(28px, 5vw, 50px)", color: textColor }}
            >
              What’s stopping you from making{" "}
              <span style={{ color: spColor }}>{text}</span>
              <span className="cursor">|</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: "20px",
                color: pColor,
                fontWeight: "500",
                marginTop: "20px",
              }}
            >
              <i>Take Control of Your Financial Future with Wallify</i>
            </motion.p>

            <motion.div whileHover={{ scale: 1.05 }}>
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
                }}
              >
                Track Your Expenses
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-lg-6 col-md-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Homeimg.png`}
              className="img-fluid rounded"
              alt="Money Jar"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </motion.div>
        </div>
      </div>

      {/* WHY WALLIFY */}
      <div
        className="container text-center mb-5 px-3 mx-auto mt-5"
        style={{ color: textColor }}
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Why Wallify?
        </motion.h1>
        <div className="row justify-content-center">
          <div className="col-6">
            <motion.p
              className="fs-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <i>
                Wallify is a modern financial companion app that provides
                budgeting tools, learning resources, predictive insights, and
                secure portfolio tracking — all in one user-friendly interface.
              </i>
            </motion.p>
          </div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="container mt-5 mb-5">
        <div className="row g-5 justify-content-center">
          {cards.map((card, index) => (
            <motion.div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div
                className="card p-3"
                style={{
                  color: butColor,
                  backgroundColor: cardColor,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <i className={`bi ${card.icon} fs-2 me-2`}></i>
                    <h5 className="card-title mb-0">{card.title}</h5>
                  </div>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OVERLAY FEATURE SECTION */}
      <div
        className="s d-flex flex-column align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${process.env.PUBLIC_URL}/Homeimg2.avif)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        {["Never overspend again", "Track where your money goes", "Visualize your spending habits"].map(
          (line, i) => (
            <motion.h2
              key={i}
              className="mt-5 p-3 border border-white rounded"
              onMouseEnter={() => setHoverBox(i)}
              onMouseLeave={() => setHoverBox(null)}
              style={{
                backgroundColor: hoverbox === i ? "white" : "transparent",
                color: hoverbox === i ? "black" : "white",
                transition: "all 0.3s ease",
                maxWidth: "520px",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              {line}
            </motion.h2>
          )
        )}
      </div>

      {/* TESTIMONIALS */}
      <div className="container mt-5 mb-5">
        <h1
          className="text-center mb-5"
          style={{ color: textColor, marginTop: "150px" }}
        >
          Success Stories From Smart Savers
        </h1>

        <div className="row g-4 justify-content-center">
          {[
            { name: "Chhavi", img: "profile1.avif", stars: 4, text: "Wallify helped me take control of my spending. I never realized how much I could save with just a little tracking!" },
            { name: "Yashika", img: "profile2.avif", stars: 4, text: "I’ve tried several budgeting apps, but Wallify’s simplicity and insights stand out. It’s now part of my daily routine." },
            { name: "Lucy", img: "profile3.png", stars: 3, text: "The expense tracker and SIP calculator are game-changers. Wallify made managing money feel easy and fun!" },
          ].map((t, i) => (
            <motion.div
              className="col-12 col-md-6 col-lg-4"
              key={i}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-3 card h-100" style={{ border: "2px solid #DDBE18" }}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      className="rounded-circle me-2 border border-black"
                      style={{ width: "40px", height: "40px" }}
                      src={`${process.env.PUBLIC_URL}/${t.img}`}
                      alt={t.name}
                    />
                    <h3 className="mb-0">{t.name}</h3>
                  </div>
                  <div className="d-flex ms-5 mt-0 mb-2">
                    {Array(5)
                      .fill()
                      .map((_, starIndex) => (
                        <i
                          key={starIndex}
                          className={`bi ${
                            starIndex < t.stars ? "bi-star-fill" : "bi-star"
                          } text-warning me-1`}
                        ></i>
                      ))}
                  </div>
                  <p>{t.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row text-center" style={{ color: spColor }}>
          {[
            { value: 15000, label: "Users" },
            { value: 30, label: "Chief Experts" },
            { value: 10, label: "Years of Experience" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="col-6 col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              <h1 style={{ fontSize: "60px" }}>
                <CountUp end={stat.value} duration={3} separator="," />+
              </h1>
              <h3>{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SUBSCRIBE SECTION */}
      <motion.div
        className="container rounded-5 p-5 m-auto mt-5 text-center"
        style={{ color: butColor, backgroundColor: cardColor }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Subscribe for updates & tips</h3>
        <p className="mt-4">
          Empower your inbox with budgeting tools, investment know-how, and the
          confidence to make bold financial decisions.
        </p>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3"
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
          <motion.button
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
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
