import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light position-static">
      <div className="container-fluid bg-dark  text-light">
        <Link className="navbar-brand bg-dark  text-light" to="/">
          <h4>Space X</h4>
        </Link>

        <button
          className="navbar-toggler  text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-dark  text-light"></span>
        </button>
        <div
          className="collapse navbar-collapse bg-dark  text-light"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  text-light"></ul>

          <div>
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0  text-light my-2 my-lg-0 mx-5"
              style={{ float: "right" }}
            >
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "text-light" : "text-muted"
                  } `}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/capsules"
                      ? "text-light"
                      : "text-muted"
                  } `}
                  to="/capsules"
                >
                  Capsules
                </Link>
              </li>
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/landpads"
                      ? "text-light"
                      : "text-muted"
                  } `}
                  to="/landpads"
                >
                  Landpads
                </Link>
              </li>
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/dragon"
                      ? "text-light"
                      : "text-muted"
                  } `}
                  to="/dragon"
                >
                  Dragon
                </Link>
              </li>
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/cores" ? "text-light" : "text-muted"
                  } `}
                  to="/cores"
                >
                  Cores
                </Link>
              </li>
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/crew" ? "text-light" : "text-muted"
                  } `}
                  to="/crew"
                >
                  Crew
                </Link>
              </li>

              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/launches"
                      ? "text-light"
                      : "text-muted"
                  } `}
                  to="/launches"
                >
                  Launches
                </Link>
              </li>
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/launchpads"
                      ? "text-light"
                      : "text-muted"
                  } `}
                  to="/launchpads"
                >
                  Launchpads
                </Link>
              </li>
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/payloads"
                      ? "text-light"
                      : "text-muted"
                  } `}
                  to="/payloads"
                >
                  Payloads
                </Link>
              </li>
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/roackets"
                      ? "text-light"
                      : "text-muted"
                  } `}
                  to="/roackets"
                >
                  Rockets
                </Link>
              </li>
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/ships" ? "text-light" : "text-muted"
                  } `}
                  to="/ships"
                >
                  Ships
                </Link>
              </li>
              <li className="nav-item bg-dark  text-light">
                <Link
                  className={`nav-link ${
                    location.pathname === "/starlinks"
                      ? "text-light"
                      : "text-muted"
                  } `}
                  to="/starlinks"
                >
                  StarLink
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    //  </div>
  );
};

export default Navbar;
