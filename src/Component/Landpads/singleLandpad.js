import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import spaceImage from "../../Image/spacex3.jpg";
import Spiner from "../Spiner/Spiner";
import axios from "axios";
import { Link } from "react-router-dom";
const SingleLandpad = () => {
  const [isLoading, setisLoading] = useState(false);
  const [singlePad, setSinglePad] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setisLoading(true);
    axios.get(`https://api.spacexdata.com/v4/landpads/${id}`).then((res) => {
      setSinglePad(res.data);
      setisLoading(false);
    });
  }, [id]);
  return (
    <>
      {isLoading && <Spiner />}
      <div className="container text-light text-start">
        <div className="my-5" style={{ marginTop: "90px", overflow: "hidden" }}>
          <img
            src={
              singlePad.images === undefined
                ? { spaceImage }
                : singlePad.images.large
            }
            className="img-fluid"
            alt="..."
            style={{ height: "400px", marginTop: "30px", width: "800px" }}
          />
        </div>
        <h1>
          <small className="text-light">LandPads Deatil</small>
        </h1>
        <h4 class>
          <small className="text-light text-center">
            {singlePad.name} ,{singlePad.full_name}
          </small>
        </h4>
        <div className="row">
          <div className="col-sm-4">
            <p>Type : {singlePad.type} </p>
            <p>locality : {singlePad.locality}kg</p>
            <p
              className={
                singlePad.status === "active" ? "text-success" : "text-danger"
              }
            >
              {singlePad.status}
            </p>
            <div>
              <a
                href={singlePad.wikipedia}
                className="btn btn-outline-light btn-md"
              >
                wikipedia
              </a>
              <Link
                to="/landpads"
                className="btn btn-outline-light btn-md mx-3"
              >
                back
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <p>region : {singlePad.region}</p>
            <p> landing attempts : {singlePad.landing_attempts}</p>
            <p> success : {singlePad.landing_successes}</p>
            <div>
              <h6>Other Deatil:</h6>
              <p>latitude : {singlePad.latitude}</p>
              <p>longitude : {singlePad.longitude}</p>
            </div>
          </div>
        </div>
        <div>
          <p calssName="h7 text-start">{singlePad.details}</p>
        </div>
      </div>
      <div className="row"></div>
      {/* // </div> */}
    </>
  );
};

export default SingleLandpad;
