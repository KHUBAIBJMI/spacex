import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const SingleShips = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.spacexdata.com/v4/ships/${id}`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <div className="container my-5 text-light text-start">
      <div className="row">
        <div className="col-sm-8 my-3">
          <img
            className="img-fluid rounded-3"
            src={data.image}
            style={{ height: "450px", width: "800px" }}
          />
        </div>
        <div className="col-sm-4 my-3">
          <h1>{data.name}</h1>
          <h5 clasName="card-text">Home Port : <small>{data.home_port}</small></h5>
          <p>Year Built : {data.year_built}</p>
          <p>Active : {data.active === true ? "true" : "false"}</p>
          <p>Mass : {data.mass_kg}kg</p>
          <p>
            Role : {data.roles},{data.roles}
          </p>
          <p>Mmsi : {data.mmsi}</p>
          <p>Type : {data.type}</p>
          <p>Legacy id : {data.legacy_id}</p>
          <a
            href={data.link}
            className="btn btn-outline-light"
            style={{ width: "100%" }}
          >
            article
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleShips;
