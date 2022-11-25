import React from "react";
import images from "../Image/spacex1.jpeg";
import image2 from "../Image/spacex2.jpg";
import image3 from "../Image/spacex3.jpg";
import "../Image/style.module.css";
const Crousel = () => {
  // const style = {
  //     width:"80%",
  //     height:"400px",
  // }
  return (
    // <h3>The Home page of Space x</h3>
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={images}
              className="d-block w-100 img img-fluid"
              alt="..."
              style={{ height: "550px" }}
            />
            <div clasName="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5> */}
              <p>
                {/* Some representative placeholder content for the first slide. */}
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              className="d-block w-100 img-fluid"
              alt="unsplash"
              style={{ height: "550px" }}
            />
            <div clasName="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src={image3}
              className="d-block w-100 img-fluid"
              alt="..."
              style={{ height: "550px" }}
            />
            <div clasName="carousel-caption d-none d-md-block text-danger">
              <strong></strong>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Crousel;
