import React, { useState } from "react";
import Base from "./Base";
import CoreFooter from "./CoreFooter";
import hospital from "../media/hospital.png";
import { Link, Redirect } from "react-router-dom";
import {
  isAuthenticated,
  authenticate,
  signin,
} from "../CoreApiCalls/coreapicalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false, //to wait use till authenticated
    didRedirect: false, //redirect to user dash
  });
  //TODO:Loading to use loader
  const { email, password, error, loading, didRedirect } = values;

  //Store the token here
  const { user } = isAuthenticated();

  const handleChange = (key) => (event) => {
    setValues({
      ...values,
      error: "",
      [key]: event.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      error: false,
      loading: true,
    });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            loading: false,
          });
          toast.error(`😲 ${data.error}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              email: "",
              password: "",
              error: "",
              didRedirect: true,
            }).then(() => {
              toast.success("❤️ Authentication Successfull!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
          }); //if we use next() we can fire a callback
        }
      })
      .catch((err) => {
        console.log("Signin Failed/Db not accessible");
      });
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 0) {
        //user comes from is authenticated
        return <Redirect to="/user/patient/dashboard" />;
      } else if (user && user.role === 1) {
        return <Redirect to="/user/pharmacy/dashboard" />;
      } else if (user && user.role === 2) {
        return <Redirect to="/user/doctor/dashboard" />;
      }
    }

    if (isAuthenticated()) {
      if (user && user.role === 0) {
        //user comes from is authenticated
        return <Redirect to="/user/patient/dashboard" />;
      } else if (user && user.role === 1) {
        return <Redirect to="/user/pharmacy/dashboard" />;
      } else if (user && user.role === 2) {
        return <Redirect to="/user/doctor/dashboard" />;
      }
    }
  };

  const signinForm = () => {
    return (
      <section className="login ">
        <div className="container d-flex h-100 text-center">
          <div className="row justify-content-center align-items-center w-100">
            <div className="col align-self-center">
              <img
                src={hospital}
                style={{ marginLeft: "-30px" }}
                alt=""
                width="170px"
                className="mb-4"
              />
              <div className="h1 text-change">Login</div>
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
              <form className="form scrollable-form" id="login-form">
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
                            name="email"
                            type="email"
                            className="form-control rounded"
                            id="email"
                            placeholder="Username"
                            value={email}
                            onChange={handleChange("email")}
                          />
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
                </div>
                <button
                  onClick={onSubmit}
                  className="login-btn btn btn-lg btn-outline-change text-dark mt-3 mx-2"
                  style={{ width: "100px" }}
                >
                  Submit
                </button>
                <p className="text-dark mt-2">
                  {" "}
                  New User?{" "}
                  <Link
                    className="text-change"
                    style={{ textDecoration: "none" }}
                    to="/signup"
                  >
                    Register Here!
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <Base>
      {signinForm()}
      {performRedirect()}
      <CoreFooter />
    </Base>
  );
};

export default Login;
