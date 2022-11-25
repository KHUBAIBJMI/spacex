import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CrewInfo = () => {
  const [crew, setCrew] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://api.spacexdata.com/v4/crew/${id}`).then((response) => {
      setCrew(response.data);
    });
  }, [id]);
  return (
    <div className="container text-start text-warning my-3">
      <div className="row">
        <div className="col-sm-6">
          <img
            src={crew.images}
            className="img-fluid rounded"
            style={{ width: "450px", height: "550px" }}
            alt = "image loading"
          />
        </div>

        <div className="col-sm-6">
          <h1>{crew.name}</h1>
          <h3>Detail</h3>
          <p>agency:{crew.agency}</p>
          <p>
            Status:
            <strong
              className={
                crew.status === "active" ? "text-success" : "text-danger"
              }
            >
              {crew.status}
            </strong>
          </p>
          <Link to="/crew" className="btn btn-outline-light mx-2">
            Back
          </Link>
        </div>
        <a href={crew.wikipedia} className="btn btn-outline-light mb-4 my-3">
          Wikipedia
        </a>
      </div>
    </div>
  );
};

export default CrewInfo;
