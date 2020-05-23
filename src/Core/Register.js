import React from "react";
import Base from "./Base";
import CoreFooter from "./CoreFooter";
import choice from "../media/choice.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Base>
      <section class="choice">
        <div class="container d-flex h-100 text-center">
          <div class="row justify-content-center align-items-center w-100">
            <div class="col align-self-center">
              <img
                src={choice}
                style={{ marginLeft: "-30px;" }}
                alt=""
                srcset=""
                width="170px"
                class="mb-4"
              />
              <h3 class="lead font-weight-normal">
                Please Select Your Identity
              </h3>
              <Link
                class="lg-btn btn btn-lg btn-outline-change text-dark mt-3 mx-2"
                to="/signup/patient"
              >
                Patient
              </Link>
              <Link
                class="lg-btn btn btn-lg btn-outline-change text-dark mt-3 mx-2"
                to="/signup/pharmacy"
              >
                Pharmacy
              </Link>
              <Link
                class="lg-btn btn btn-lg btn-outline-change text-dark mt-3 mx-2"
                to="/signup/doctor"
              >
                Doctor
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CoreFooter />
    </Base>
  );
};

export default Register;
