import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Typewriter effect hook
function useTypewriter(text, speed = 100) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

export default function Learn(props) {
  const textColor = props.mode === "dark" ? "#fffbeb" : "#000";
  const cardColor = props.mode === "light" ? "#4f000b" : "#b7e4c7";
  const butColor = props.mode === "light" ? "#fff" : "#000";

  const [modules, setModules] = useState([]);
  const [badge, setBadge] = useState([]);

  const totalModules = 2;
  const progress = Math.round((modules.length / totalModules) * 100);

  const handleModuleComplete = (moduleName, newBadge) => {
    setModules((prev) => (prev.includes(moduleName) ? prev : [...prev, moduleName]));
    if (!badge.includes(newBadge)) setBadge((prev) => [...prev, newBadge]);
  };

  const badgeImages = {
    Unstoppable: `${process.env.PUBLIC_URL}/Unstoppable.webp`,
    Achiever: `${process.env.PUBLIC_URL}/Winbadge.webp`,
  };

  // Typewriter texts
  const heading = useTypewriter("Wallify Learning Hub");
  const subtitle = useTypewriter("Master Your Money, One Lesson at a Time");

  const moduleData = [
    {
      title: "Budgeting Basics",
      topics: [
        "What is Budgeting and Why is it Important?",
        "How to Start Budgeting?",
        "Budgeting Mistakes to Avoid",
      ],
      contents: [
        "A plan to manage your income and expenses, helping you save and avoid debt.",
        "Track income, list expenses, and follow the 50/30/20 rule — needs, wants, and savings.",
        "Skipping savings, ignoring small expenses, and not updating your budget regularly.",
      ],
      badge: "Unstoppable",
    },
    {
      title: "Saving Smart",
      topics: [
        "Why is Smart Saving Important?",
        "Best Practices for Saving Smart",
      ],
      contents: [
        "Smart saving helps you build financial security, prepare for emergencies, and reach long-term goals.",
        "Automate savings, set goals, track spending, review monthly.",
      ],
      badge: "Achiever",
    },
  ];

  const cardHover = {
    whileHover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" },
  };

  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <div className="container mb-5" style={{ marginTop: "100px", color: textColor }}>
      {/* Heading */}
      <motion.h1 className="text-center mb-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {heading}
      </motion.h1>
      <motion.p className="text-center mb-4" style={{ color: cardColor }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        {subtitle}
      </motion.p>

      <div className="row">
        {/* Modules Section */}
        <div className="col-12 col-lg-7">
          {moduleData.map((mod, idx) => (
            <motion.div key={idx} className="card mt-4 p-0" style={{ cursor: "pointer" }} variants={fadeIn} initial="hidden" animate="visible" whileHover={cardHover.whileHover}>
              <div className="card-header" style={{ backgroundColor: "#02939c", color: "white" }}>
                <h4 className="m-0 p-2">{mod.title}</h4>
              </div>
              <div className="card-body">
                <div className="accordion accordion-flush" id={`accordion${idx}`}>
                  {mod.topics.map((topic, i) => (
                    <div className="accordion-item" key={i}>
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}${i}`} aria-expanded="false">
                          {topic}
                        </button>
                      </h2>
                      <div id={`collapse${idx}${i}`} className="accordion-collapse collapse" data-bs-parent={`#accordion${idx}`}>
                        <div className="accordion-body">{mod.contents[i]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-footer text-center">
                <motion.button
                  className="btn btn-success"
                  onClick={() => handleModuleComplete(mod.title, mod.badge)}
                  disabled={modules.includes(mod.title)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {modules.includes(mod.title) ? "Completed" : "Mark as Complete"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress and Badges */}
        <div className="col-12 col-lg-5 mt-4 mt-lg-0">
          <motion.div className="card m-4 p-0" style={{ minHeight: "500px" }} variants={fadeIn} initial="hidden" animate="visible">
            <div className="card-header text-center" style={{ backgroundColor: "#ba181b", color: "white" }}>
              <h4 className="p-2">Your Progress</h4>
            </div>
            <div className="card-body">
              <motion.div className="progress" style={{ height: "30px" }}>
                <motion.div className="progress-bar" style={{ width: `${progress}%` }} initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 1.2 }}>
                  {progress}%
                </motion.div>
              </motion.div>
              <p className="mt-3 fw-semibold">
                {progress === 0 && "Let's get started!"}
                {progress > 0 && progress < 100 && "You're doing great — keep it up!"}
                {progress === 100 && "🎉 Congratulations! All modules completed!"}
              </p>

              <h6 className="mt-4 mb-3 text-decoration-underline">Modules Completed</h6>
              <ul className="ps-3">{modules.map((module, idx) => <li key={idx}>{module}</li>)}</ul>
            </div>

            <div className="card-footer">
              <h5>Badges: </h5>
              <ul className="ps-3 d-flex gap-3 list-unstyled">
                {badge.map((b, idx) => (
                  <motion.li key={idx} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: idx * 0.2 }}>
                    <img src={badgeImages[b]} alt={b} width="40" height="40" title={b} />
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
