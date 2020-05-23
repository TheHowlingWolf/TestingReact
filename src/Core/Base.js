import React from "react";
import caseLogo from "../media/Icon.png";
const Base = ({ children }) => {
  return (
    <div>
      <section className="buttons my-2">
        <div className="container-fluid m-0">
          <div className="row w-100 m-0">
            <div className="col-6 w-100 pt-1">
              <span className="h6 text-change  ">
                <img src={caseLogo} alt="" width="20" className="mb-1 mr-2" />
                Ease My Prescript
              </span>
            </div>
            <div className="col-6 text-right w-100">
              <span className="pl-5">
                <button
                  id="close-btn"
                  className="btn btn btn-transparent text-change m-0 p-0"
                  //onClick={winmin}
                >
                  <i className="fas fa-window-minimize p-1"></i>
                </button>
                <button
                  id="close-btn"
                  className="btn btn btn-transparent text-change m-0 p-0"
                  //onClick={winclose}
                >
                  <i className="fas fa-times-circle p-1"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
};

export default Base;
