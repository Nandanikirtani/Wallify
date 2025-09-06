import React from "react";

export default function Community(props) {
  const textColor = props.mode === "dark" ? "#fffbeb" : "black";
  const cardColor = props.mode === "light" ? "#4f000b" : "#b7e4c7";
  const butColor = props.mode === "light" ? "white" : "black";
  return (
    <div className="container mb-5" style={{ marginTop: "100px", color: textColor }}>
      <div className="row mb-5 text-center">
        <div className="col">
          <h2>Welcome to the Wallify Community 🌸</h2>
          <p>
            Connect with inspiring women, share your journey, and grow together
            financially.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body" style={{ minHeight: "150px" }}>
              <h5 className="card-title">💡 Weekly Money Mission</h5>
              <p className="card-text">
                Take the ₹200 Savings Challenge and earn your “Money Mover”
                badge!
              </p>
              <button className="btn btn-outline-success mb-1">
                Join Challenge
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body" style={{ minHeight: "150px" }}>
              <h5 className="card-title">🏆 Success Highlight</h5>
              <p className="card-text">
                “Wallify helped me save for my dream trip!” – Priya, Mumbai
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col">
          <h4>Start a Conversation 💬</h4>
          <p>
            Have tips, questions, or stories? Share them with the community
            below.
          </p>
          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="Type your message..."
          ></textarea>
          <button className="btn btn-primary">Post Message</button>
        </div>
      </div>
    </div>
  );
}
