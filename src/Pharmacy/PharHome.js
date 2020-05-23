import React from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated, signout } from "../CoreApiCalls/coreapicalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Base from "../Core/Base";
import AuthFooter from "../Core/AuthFooter";

const PharHome = () => {
  return (
    <Base>
      Hi Pharmacy
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
      {isAuthenticated && (
        <Link
          className="lg-btn btn btn-lg btn-outline-change text-dark mt-3 mx-2"
          onClick={() => {
            //this callback is from default of onclick
            signout(() => {
              //this callback is from next of signout
              return <Redirect to="/" />;
            }).then((Response) => {
              return toast.success(`❤️ ${Response.message}`, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
          }}
        >
          Sign Out
        </Link>
      )}
      <AuthFooter />
    </Base>
  );
};

export default PharHome;
