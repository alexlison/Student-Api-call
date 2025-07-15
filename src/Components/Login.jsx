import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center m-5">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card w-75 mx-auto">
              <div className="card-header text-center">
                <h5 className="card-title mb-0">Login Page</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input type="text" id="username" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" id="password" className="form-control" />
                </div>
                <div className="text-center">
                  <Link  to="/add" className="btn btn-warning">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
