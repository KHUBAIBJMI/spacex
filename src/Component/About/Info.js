import React, { useState, useEffect } from "react";
import axios from "axios";
// import InfoItem from "./InfoItem";
// import Page404 from "../Page404";
import Spiner from "../Spiner/Spiner";
const Info = () => {
  const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const fetchData = () => {
    setisLoading(true);
    axios
      .get("https://api.spacexdata.com/v4/company")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setError(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container text-light text-start my-4">
      <div className="row">
        <div className="col">
          {isLoading && <Spiner />}
          <h1>About Company </h1>
          <h3> Founder : {data.ceo}</h3>
          <h5>Name : {data.name}</h5>
          <p>Ceo : {data.ceo}</p>
          <p>{data.coo}</p>
          <p>Cto : {data.cto}</p>
          <p>Cto Propulsion : {data.cto_propulsion}</p>
          <p>employees : {data.employees}</p>
          <p>Founded in : {data.founded}</p>
          <p>Launch Side : {data.launch_sites}</p>
          <p>Test Sites : {data.test_sites}</p>
          <p>Valuation : {data.valuation}</p>
          <p>vehicle : {data.vehicles}</p>
          <a
            href={data.links === undefined ? "" : data.links.website}
            className="btn btn-outline-light w-75"
          >
            Space x{" "}
          </a>
        </div>
        <div className="col-4">
          <h1>Headquarter </h1>
          <h5>
            Address :
            {data.headquarters === undefined ? "" : data.headquarters.address}
          </h5>
          <h5>
            Sity :
            {data.headquarters === undefined ? "" : data.headquarters.city}
          </h5>
          <h5>
            State :
            {data.headquarters === undefined ? "" : data.headquarters.state}
          </h5>
        </div>
        <div className="col">
          <h1>Summary</h1>
          <p>{data.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
