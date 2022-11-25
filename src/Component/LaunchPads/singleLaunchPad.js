import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Spiner from "../Spiner/Spiner";
const SingleLaunchPad = () => {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = () => {
    setisLoading(true);
    axios
      .get(`https://api.spacexdata.com/v4/launchpads/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="container text-warning text-start"
      style={{ marginTop: "90px" }}
    >
      {isLoading && <Spiner />}
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6">
              <h3> {data.name}</h3>
              <h6> Full Name : {data.full_name}</h6>
              <p>locality :{data.locality}</p>
              <p>region {data.region}</p>
              <p>
                Launch Attempt
                <small className="text-success">: {data.launch_attempts}</small>
              </p>
              <p>
                Succesful
                <small className="text-success">
                  : {data.launch_successes}
                </small>
              </p>
              <Link
                to="/launchpads"
                type="button"
                className="btn btn-outline-warning btn-md my-2"
              >
                Back
              </Link>
            </div>
            <div className="col-sm-4 my-3">
              <p>Status : {data.status}</p>
              <p>Ships : {data.timezone}</p>
              <div>
                <h6>Other Deatil:</h6>
                <p>Longitude : {data.longitude}</p>
                <p>Latitude : {data.latitude}</p>
              </div>
            </div>
          </div>
          <p className="card-text text-light my-3">{}</p>
        </div>
        <div className="col-sm-6">
          <img
            src={data.images === undefined ? "undefined" : data.images.large}
            className="img-fluid rounded-2"
            alt="..."
          />
        </div>
        <div className="my-5">
          <p calssName=" text-start my-3 text-bold">{data.details}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleLaunchPad;
