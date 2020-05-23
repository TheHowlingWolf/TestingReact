import React from "react";
import { Link } from "react-router-dom";

const AuthFooter = () => {
  return (
    <section className="initials">
      <div className="container d-flex h-100 text-center">
        <div className="row justify-content-center align-items-center w-100">
          <div className="col align-self-center">
            <div
              className="row justify-content-center fixed-bottom"
              style={{ backgroundColor: "white" }}
            >
              <div className="col align-self-center">
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
  );
};

export default AuthFooter;
