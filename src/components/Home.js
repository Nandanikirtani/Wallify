import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  const textColor = props.mode === "dark" ? "#fffbeb" : "black";
  const backgroundColor = props.mode === "dark" ? "#ff9f1c" : "#2338a9";
  const butColor = props.mode === "light" ? "white" : "black";
  const pColor = props.mode === "light" ? "#073b3a" : "#99f7ce";

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
    </>
  );
}
