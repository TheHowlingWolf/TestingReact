import React from "react";
import Base from "./Base";
import pill from "../media/pill.png";
import CoreFooter from "./CoreFooter";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../CoreApiCalls/coreapicalls";

const Home = () => {
  const { user } = isAuthenticated();
  if (isAuthenticated()) {
    if (user && user.role === 0) {
      //user comes from is authenticated
      return <Redirect to="/user/patient/dashboard" />;
    } else if (user && user.role === 1) {
      return <Redirect to="/user/pharmacy/dashboard" />;
    } else {
      return <Redirect to="/user/doctor/dashboard" />;
    }
  }
  return (
    <Base>
      <section className="intro ">
        <div className="container d-flex h-100 text-center">
          <div className="row justify-content-center align-items-center w-100">
            <div className="col align-self-center">
              <img
                src={pill}
                style={{ marginLeft: "-30px" }}
                alt=""
                width="170px"
                className="mb-4"
              />
              <h1
                className="display-4 font-weight-bold text-dark"
                style={{ marginTop: "-20px", zIndex: "20" }}
              >
                Ease My Prescript
              </h1>
              <h3 className="lead font-weight-normal">
                Medicine Management System
              </h3>
              <Link
                className="lg-btn btn btn-lg btn-outline-change text-dark mt-3 mx-2"
                to="/signin"
              >
                Login
              </Link>
              <Link
                className="lg-btn btn btn-lg btn-outline-change text-dark mt-3 mx-2"
                to="/signup"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CoreFooter />
    </Base>
  );
};

export default Home;
