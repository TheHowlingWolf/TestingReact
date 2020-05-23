import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const CoreFooter = () => {
  const StyleChange = () => {
    const endPath = window.location.href.split("/").pop();
    if (endPath === "main") {
      document.querySelector(".home-nav").style =
        "border-bottom: 2px solid #1ccbba; color: #1ccbba;";
    } else if (endPath === "signin") {
      document.querySelector(".login-nav").style =
        "border-bottom: 2px solid #1ccbba; color: #1ccbba;";
    } else {
      document.querySelector(".register-nav").style =
        "border-bottom: 2px solid #1ccbba; color: #1ccbba;";
    }
  };

  useEffect(() => {
    StyleChange();
  }, []);

  return (
    <div>
      <section className="initials">
        <div className="container d-flex h-100 text-center">
          <div className="row justify-content-center align-items-center w-100">
            <div className="col align-self-center">
              <div
                className="row justify-content-center fixed-bottom"
                style={{ backgroundColor: "white" }}
              >
                <div className="col align-self-center">
                  <div className="row my-3">
                    <div className="col-3"></div>
                    <div className="col-6">
                      <Link className="home-nav px-2" to="/main">
                        Home
                      </Link>
                      <Link className="login-nav px-2" to="/signin">
                        Login
                      </Link>
                      <Link className="register-nav px-2" to="/signup">
                        Register
                      </Link>
                    </div>
                    <div className="col-3"></div>
                  </div>
                  <p className="text-dark">
                    {" "}
                    Powered By{" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <b className="text-change">Ease My Prescript</b>
                    </Link>{" "}
                    All Rights Reserved.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreFooter;
