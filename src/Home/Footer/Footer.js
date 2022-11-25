import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    // <!-- Footer -->
    <footer class="page-footer font-small blue pt-4 text-light bg-dark position-sticky text-start">
      {/* <!-- Footer Links --> */}
      <div class="container-fluid text-center text-md-left">
        {/* <!-- Grid row --> */}
        <div class="row">
          {/* <!-- Grid column --> */}
          <div class="col-md-6 mt-md-0 mt-3">
            {/* <!-- Content --> */}
            <h5 class="text-uppercase"> Content</h5>
            <p>
              SpaceX designs, manufactures and launches advanced rockets and
              spacecraft. The company was founded in 2002 to revolutionize space
              technology, with the ultimate goal of enabling people to live on
              other planets.
            </p>
          </div>
          {/* <!-- Grid column --> */}

          <hr class="clearfix w-100 d-md-none pb-3" />

          {/* <!-- Grid column --> */}
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">About</h5>

            <ul class="list-unstyled" style={{ underline: "none" }}>
              <li>
                <Link
                  to="/about"
                  type="button"
                  class="btn btn-outline-dark text-light"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Conatct</h5>

            <ul class="list-unstyled">
              <li>
                <a
                  href="https://twitter.com/SpaceX"
                  className="btn btn-outline-dark text-light"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.spacex.com"
                  className="btn btn-outline-dark text-light"
                >
                  Space x
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://www.spacex.com"> Space X</a>
      </div>
    </footer>
  );
};

export default Footer;
