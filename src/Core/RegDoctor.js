import React, { useState } from "react";
import Base from "./Base";
import CoreFooter from "./CoreFooter";
import doctor from "../media/doctor.png";
import { Link } from "react-router-dom";
import { signup } from "../CoreApiCalls/coreapicalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegDoctor = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    mob: "",
    role: 2,
    error: "",
    success: false,
  });

  const { name, email, password, mob, role, error, success } = values;

  const handleChange = (key) => (event) => {
    setValues({
      ...values,
      error: false,
      [key]: event.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    setValues({ ...values, error: false });
    signup({ name, email, password, mob, role })
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            success: false,
          });
          return toast.error(`😲 ${data.error}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          //reseting form
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            mob: "",
            error: "",
            success: true,
          });
          return toast.success(
            "❤️ Successfully Registered! Please Login In To Continue",
            {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      })
      .catch((err) => {
        console.log("Error Signing Up");
      });
  };

  return (
    <Base>
      <section className="choice">
        <div className="container d-flex h-100 text-center">
          <div className="row justify-content-center align-items-center w-100">
            <div className="col align-self-center">
              <img
                src={doctor}
                style={{ marginLeft: "-30px" }}
                alt=""
                width="170px"
                className="mb-4"
              />
              <div className="h1 text-change">Register Here</div>
              <p className="lead text-change">Fill the form below</p>
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <form className="form scrollable-form" id="patientSignUp">
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="container text-center">
                      <div className="row w-100">
                        <div className="col-2 w-100">
                          <span className="input-group-addon">
                            <i className="far fa-id-badge fa-2x pt-2"></i>
                          </span>
                        </div>
                        <div className="col-10 w-100">
                          <input
                            name="name"
                            type="name"
                            className="form-control rounded"
                            id="patientname"
                            placeholder="Your Name"
                            value={name}
                            onChange={handleChange("name")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="container text-center">
                      <div className="row w-100">
                        <div className="col-2 w-100">
                          <span className="input-group-addon">
                            <i className="far fa-envelope fa-2x pt-2"></i>
                          </span>
                        </div>
                        <div className="col-10 w-100">
                          <input
                            name="email"
                            type="email"
                            className="form-control rounded"
                            id="email"
                            placeholder="Email ID"
                            value={email}
                            onChange={handleChange("email")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="container text-center">
                      <div className="row w-100">
                        <div className="col-2 w-100">
                          <span className="input-group-addon">
                            <i className="fas fa-lock fa-2x pt-2"></i>
                          </span>
                        </div>
                        <div className="col-10 w-100">
                          <input
                            name="password"
                            type="password"
                            className="form-control rounded"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange("password")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="container text-center">
                      <div className="row w-100">
                        <div className="col-2 w-100">
                          <span className="input-group-addon">
                            <i className="fas fa-info-circle fa-2x pt-2"></i>
                          </span>
                        </div>
                        <div className="col-10 w-100">
                          <input
                            name="mob"
                            type="number"
                            className="form-control rounded"
                            id="mob"
                            placeholder="Mobile Number"
                            value={mob}
                            onChange={handleChange("mob")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onSubmit}
                  className="btn btn-outline-change text-dark mt-1 mx-2"
                  style={{ width: "100px" }}
                >
                  Submit
                </button>
                <p className="text-dark mt-2">
                  {" "}
                  Get
                  <Link
                    className="text-change"
                    style={{ textDecoration: "none" }}
                    to="/signup"
                  >
                    {" "}
                    Back
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <CoreFooter />
    </Base>
  );
};

export default RegDoctor;
