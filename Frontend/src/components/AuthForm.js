import React from "react";

export default function AuthForm({
  title,
  description,
  fields,
  onSubmit,
  primaryButtonLabel,
  secondaryText,
  secondaryLinkText,
  secondaryLinkHref,
  showSocialLogin = true,
}) {
  return (
    <div className="container-fluid mt-3 py-5" style={{ backgroundColor: "#e2eafc" }}>
      <div className="row justify-content-center align-items-center">
        
        {/* Left Text Column */}
        <div className="col-lg-6 col-md-10 text-center text-lg-start px-5 mb-5 mb-lg-0">
          <h1 className="fw-bold" style={{ color: "#4f000b", fontSize: "50px" }}>
            Welcome to Wallify
          </h1>
          <h5 className="mt-4" style={{ color: "#4f000b" }}>
            Track your expenses, plan your budget, and invest smartly <br />— all in one place.
          </h5>
        </div>

        {/* Auth Form */}
        <div className="col-lg-4 col-md-8">
          <div
            className="p-4 rounded-3 text-white"
            style={{ backgroundColor: "#4f000b" }}
          >
            <h1 className="text-center mb-4">{title}</h1>

            {fields.map(({ label, type, placeholder, id }, idx) => (
              <div className="mb-3" key={idx}>
                <label htmlFor={id} className="form-label">{label}</label>
                <input
                  type={type}
                  className="form-control"
                  id={id}
                  placeholder={placeholder}
                />
              </div>
            ))}

            {description && (
              <p className="my-4 text-center">{description}</p>
            )}

            <button
              type="button"
              className="btn btn-warning w-100 mb-3"
              onClick={onSubmit}
            >
              {primaryButtonLabel}
            </button>

            {showSocialLogin && (
              <>
                <p className="text-center">--------or--------</p>
                <p className="text-center mb-3">Login using</p>
                <div className="d-flex justify-content-center gap-3">
                  <button className="btn btn-light rounded-5 px-3">
                    <i className="bi bi-google"></i>
                  </button>
                  <button className="btn btn-light rounded-5 px-3">
                    <i className="bi bi-apple"></i>
                  </button>
                </div>
              </>
            )}

            {secondaryText && (
              <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
                <p className="mb-0 text-white">{secondaryText}</p>
                <a
                  className="text-white text-decoration-underline"
                  href={secondaryLinkHref}
                >
        
                  {secondaryLinkText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
